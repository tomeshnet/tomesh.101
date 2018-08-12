# Glossary

This glossary is used to house key terminology and definitions relevant to mesh networking.

## Parts of A Network

* **Node** - A connection point on a network. A network is formed when two nodes are able to communicate with one another.
* **Link** - A logical connection between two nodes (ignoring physical infrastructure in the way) or a physical link between two nodes (using ethernet, fiber, wireless equipment, etc.). Links allow nodes to communicate with one another.
* **Supernode** -  A node on the network that actively routes traffic/data for other nodes.
* **Peer** - A node on the network that both supplies and consumes network resources.
* **Edge** - An entry point onto a network. Generally an edge acts as a router which sits between a smaller, more localized subnetwork and a network backbone. 
* **Backbone** - The core of a network, responsible for connecting and quickly routing traffic/data between other subnetworks. In air based networks this often refers to faster wires, such as fiber.
* **Backhaul** - The intermediate links between the network’s backbone and edge subnetworks.

## Moving Around A Network

* **Hop** - One portion of network path between the source and destination. Anytime data flows through another node on the network on the way to its destination, a hop occurs.
* **Route/Path** - A specified course taken from a starting point to a destination.
* **Data Packet** - A piece of data packaged up to be sent logically along a network path to a specific destination.
* **Ethernet Frame** - A piece of data packaged up to be transmitted physically along a network path to a specific destination.
* **Protocol** - A set of rules or standards for communication between nodes on a network.
* **Propagation** - The movement of data from one or more sources to one or more discrete destinations through a network, usually to make the data more accessible. 
* **Multiplexing** - When several different signals (digital and/or analog) are combined to be transferred over one shared medium.

## What Does A Network Look Like?

* **Topology** - The way in which objects are arranged and how they relate to one another.
* **Centralized** - A network topology where all users/clients need to connect to a central server for all communications.
* **Decentralized** - A network topology where multiple servers are linked together, allowing clients to connect to any server and still be within the same network.
* **Distributed** - A network topology where all actors connect and communicate with one another, forming a peer-to-peer network. Each actor is both a client and a server.
* **Federated** - A network topology consisting of smaller, more centralized self-governed organizations (usually one server and many clients) that elect to share data with one another.

## Radio & Wireless

* **Point-to-Point** - A communication connection between two nodes. 
* **dBm** - Decibel-milliwatts, the power ratio in decibels per milliwatt used to measure absolute power.
* **Gain** - A measure of an antenna’s ability to convert input power into radio waves concentrated in a particular connection.
* **Radio** - A device within a piece of electronic equipment responsible for sending/receiving wireless signals.
* **EIRP** - Equivalent Isotropically Radiated Power, an IEEE standard for directional radio frequency power. The EIRP is the product of transmitter power and antenna gain for an isotropic antenna, measured in dBi (decibel isotropic).
* **Frequency** - The rate in which a complete radio wave occurs over a period of time. Typically measured in Hertz (Hz).
* **Wavelength** - The distance (in meters) of a complete radio wave.
* **Amplitude** - The distance (in meters) from the  center of a wave to its crest/trough (the edge).
* **Band (spectrum)** - Radio frequencies lie between 3 kHz and 300 GHz and are split up into different bands set aside to be used for the same purpose.

## Types of Antennas

* **Omnidirectional** - A type of antenna that radiates radio wave power uniformly in all directions on one plane.
* **Isotropic** - A type of antenna that radiates power in all directions. No existing physical antenna is actually fully isotropic, though isotropic antennas are also used as reference for gain.
* **Yagi** - A type of antenna consisting of multiple parallel elements arranged in a line.
* **Cantenna** - A directional waveguide antenna, made out of an open-ended metal can and designed to be unidirectional.

## Mesh Terminology 

* **Routing Table** - A set of rules that determine where packets will be directed within a network.
* **802.11s** - An amendment to the IEEE 802.11 wireless local area network specification defining how wireless devices can communicate in static or ad hoc networks.
* **Mesh Point (MP)** - An operation mode defined within the 802.11s standard. Mesh Point allows nodes in a network to discover neighbor nodes and keep track of them.
* **Auto-Peering** - The ability for two peers on a network to automatically link with one another using zero configuration.
* **Tunneling/Overlaying** - Securely encapsulating communication/traffic from a private network within a larger, public network.

## OSI Network Layers

Layer | Function | Example
--- | --- | ---
1 (Physical) | Transmission and reception of raw bit streams over a physical medium. | Wires, Radio waves
2 (Data Link) | Reliable transmission of data frames between two nodes connected by a physical layer. | Ethernet, LAN
3 (Network) | Structuring and managing a multi-node network, including addressing, routing and traffic control. | The Internet, WAN, IP
7 (Application) | High-level APIs, including resource sharing, remote file access. | Telnet, SSH, FTP, **IPFS**

There are layers in between 3 and 7, but those are the main ones.