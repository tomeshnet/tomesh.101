<!SLIDE bullets>
# Today's agenda #

* Why a community mesh?

* Hardware platform based on our Raspberry Pi router

* .callout Routing protocols and the cjdns software

* Get our hands dirty and hack something together :)

<!SLIDE>

![baracktocat](baracktocat.jpg)

<!SLIDE bullets>
# Routing protocols and management software #

* [B.A.T.M.A.N.](https://www.open-mesh.org/projects/batman-adv/wiki)

* [Gluon](http://gluon.readthedocs.io/en/)

* [Commotion](https://commotionwireless.net)

* .callout [cjdns](https://github.com/cjdelisle/cjdns)

<!SLIDE>
# Hyperboria #

![hype](hype.png)

Runs on OS X, Windows, all flavours of GNU/Linux, OpenWrt, Raspbian (Raspberry Pi), Android... so each node on [fc00.org](https://www.fc00.org) can be any of these and anywhere physically

<!SLIDE>
# Your Hyperboria identity #

	@@@ javascript
	~/D/p/g/cjdns ❯❯❯ ./cjdroute --genconf
	...
    // Private key:
    // Your confidentiality and data integrity depend on this key, keep it secret!
    "privateKey": "ee2e557f33ab509ddc49fb2fff91e2588d03b053be06af6297ec0079bc8fed68",

    // This key corresponds to the public key and ipv6 address:
    "publicKey": "fyjq991yjkqyvwbf6m8xf5zt7dsb7b21y83jy1nx1prd9nly3wu0.k",
    "ipv6": "fc83:c18c:e964:a7b7:86f:8c:9a86:6974",
    ...

* Address derived from cryptographic keys enables end-to-end encryption by default

* IPv6 global uniqueness allows disjoint meshnets to merge

* Valid **fc00::/8** addresses mean compatibility with all applications that support IPv6

<!SLIDE>
# Routing across the network #

* Each node makes up part of the infrastructure (i.e. route for your peers). Responsibilities:

	* Check who is around me (in address space)
	* Respond to other nodes
	* Pass *packets* along (encrypted packets arriving from peers)

* *Source routing* via [Kademlia DHT](https://en.wikipedia.org/wiki/Kademlia)

* Agnostic to physical interface

* [HYPERBORIA 101](http://n-o-d-e.net/post/139284891496/hyperboria-101-moving-through-the-mesh)

* [cjdns Whitepaper](https://github.com/cjdelisle/cjdns/blob/master/doc/Whitepaper.md)

<!SLIDE>
# Peers #

Run script:

	@@@ bash
	$ nodejs tools/peerStats

Output:

	@@@ bash
	v17.0000.0000.0000.001d.fn8zzfm784thq3phpf200r1d7k7ry7qdfpub9qc4nw75csnzhbz0.k ESTABLISHED in 6kb/s out 5kb/s  LOS 24 "outer"
	v17.0000.0000.0000.001b.1941p5k8qqvj17vjrkb9z97wscvtgc1vp8pv1huk5120cu42ytt0.k ESTABLISHED in 15kb/s out 24kb/s  LOS 1391 "outer"
	v0.0000.0000.0000.0019.h3wzj7hs03c9cw941dlzlm6ftyhmyl5v58kq82kpz1rd475g6mj0.k UNRESPONSIVE in 0kb/s out 0kb/s "outer"
	v16.0000.0000.0000.0017.plh678c14ktlmbkzd4x51bfcp9d3ng10dkd2xzqp6slftbnnr3j0.k ESTABLISHED in 6kb/s out 6kb/s  LOS 12 "outer"
	v17.0000.0000.0000.0015.7ucw7mr8j3qns8zuxl0hptcxw71zlpzj691w3ykvr7wb15dgygx0.k ESTABLISHED in 6kb/s out 7kb/s  LOS 194 "zekesonxx-prunty"
	v17.0000.0000.0000.0013.x667rxfwus4qnrhr12xxvhkpnuh3gd0r7uuyycl2z91zgcmdumy0.k ESTABLISHED in 9kb/s out 7kb/s  LOS 1008 "UnexpectedConsequence.astriaporta.space"

<!SLIDE>
# Routes #

Run script:

	@@@ bash
	$ nodejs tools/dumptable

Output:

| ver.path.addr | bucket | metric | lastPinged | Note |
|:--|:-:|:-:|:-:|:-:|
| v17.0000.0000.0000.0001.**2scy...ynk0.k** | 127 | 0 | 216216550 | Self |
| v17.0000.0000.0000.0013.**x667...dumy0.k** | 0 | 1024 | 44191 | Peer |
| v17.0000.0000.0000.0015.**7ucw...ygx0.k** | 0 | 1024 | 45759 | Peer |
| v16.0000.0000.0000.0017.**plh6...r3j0.k** | 0 | 1024 | 131570 | Peer |
| v17.0000.0000.0000.001b.**1941...ytt0.k** | 0 | 1024 | 19934 | Peer |
| v17.0000.0000.0000.001d.**fn8z...hbz0.k** | 0 | 1024 | 47724 | Peer |
| v17.0000.0000.0000.0137.**1rfp...ru80.k** | 3 | 2048 | 13510 | |
| v17.0000.0000.0000.0177.**dpdu...6by0.k** | 1 | 2048 | 17203 | |
| ... | ... | ... | ... | |
| v16.0000.00fe.7381.52eb.**4jl2...ts40.k** | 6 | 6144 | 8724 | |
| v16.0000.0484.7381.52eb.**4srz...95g0.k** | 8 | 6144 | 6582 | |
| v16.05c1.1eb6.ec48.9263.**t0yj...7pd0.k** | 9 | 1051648 | 52795 | |
| 133 nodes 5 peers | | | | |

<!SLIDE>
# Life of a packet #

	@@@ none
	                   +-------------------+
	                   | TUNAdapter (tun0) |
	                   +-----+-------+-----+
	                         |       |
	                fc00::/8 |       | 10.12.34.0/24
	                         |       | fd12:3:4:5::/64
	                         |       |
	            +------------v--+ +--v-----------------+ +----------------------------+
	            | TUN Interface | | IPTunnel Interface | | MyLittleProtocol Interface |
	            +---------------+ +--------------------+ +--+-------------------------+
	            | fc12::356     | | 10.12.34.56        |    |
	            +------------+--+ | fd12:3:4:5::6      |    |
	                         |    +--+-----------------+    |
	                         |       |                      |
	  +----------------+  +--v-------v----------------------v--+
	  | Router / CJDHT +-->     CryptoAuth / SessionManager    |    Encrypt/decrypt packets,
	  |                <--+                                    |    mux protocols from above.
	  +----------------+  +-------------+----------------------+
	                                    | Searching a path is a side-effect
	                                    | of establishing a session.
	                                    v

<!SLIDE>
# Life of a packet #

	@@@ none
	                                                          |
	  End-to-end encrypted from here on +----------------------------------------+
	                                                          |
	                                         +----------------v------------+
	                                         | Switch                      |
	                                         +---------------------+-------+
	                                         | 0000.0000.0000.0001 | self  |
	                                         | 0000.0000.0000.0013 | peerA |
	                                         | 0000.0000.0000.0015 | peerB |
	                                         +-----------+-------+-+-------+
	                                                     |       |
	  Point-to-point encrypted from here on +------------------------------------+
	                                                     |       |
	                                        +------------v--+ +--v------------+
	                                        | UDP Interface | | ETH Interface |
	                                        +---------------+ +---------------+
	                                        | 0.0.0.0:54321 | | wlan0         |
	                                        | [::]:54321    | | eth0          |
	                                        +---------------+ +---------------+

*Modified version of: https://github.com/ipfs/notes/issues/14#issuecomment-124292322*

<!SLIDE>
# Bring-up WiFi radio #

	@@@ bash
	# Shut down the wlan0 interface
	sudo ifconfig wlan0 down

	# Create mesh0 802.11s Mesh Point interface
	sudo iw dev wlan0 interface add mesh0 type mp

	# Bring up the mesh0 interface
	sudo ifconfig mesh0 up

	# Optionally assign IPv4 address to the mesh0 interface
	# sudo ifconfig mesh0 192.168.X.Y

	# Join the mesh network with radio in HT40+ htmode to enable 802.11n rates
	sudo iw dev mesh0 mesh join tomesh freq 2412 HT40+

	# Disable forwarding since we rely on cjdns to do routing and only uses Mesh Point as a point-to-point link
	sudo iw dev mesh0 set mesh_param mesh_fwding=0

*Source: https://github.com/tomeshnet/prototype-cjdns-pi2*

<!SLIDE>
# Start cjdns #

	@@@ bash
	# Get tools
	if ! [ "$(which git)" ] || ! [ "$(which nodejs)" ] || ! [ "$(which iperf3)" ]; then
        sudo apt-get update
        sudo apt-get install git nodejs iperf3
	fi

	# Get cjdns
	if ! [ -d "cjdns" ]; then
        git clone https://github.com/hyperboria/cjdns.git
	fi
	cd cjdns

	# Build cjdns with optimizations
	if ! [ -x "cjdroute" ]; then
        ./clean && NO_TEST=1 Seccomp_NO=1 CFLAGS="-s -static -Wall -mfpu=neon -mcpu=cortex-a7 -mtune=cortex-a7 -fomit-frame-pointer -marm" ./do
	fi

	# Generate cjdns node configurations
	if ! [ -f "cjdroute.conf" ]; then
        ./cjdroute --genconf > cjdroute.conf
	fi

	# Run cjdns
	sudo ./cjdroute < cjdroute.conf

*Source: https://github.com/tomeshnet/prototype-cjdns-pi2*