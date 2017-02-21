# tomesh.101

tomesh.101 experience is where introductory outreach and educational materials for Toronto Mesh [tomesh.net](https://tomesh.net) are worked on and stored. This is a **working repository**, as a result, a lot of the material in here is in **draft** form.


## Repository Structure

The repository is structured as follows:
* `glossary/ ` contains key terminology and definitions relevant to mesh networking
* `presentations/ ` contains presentation materials (including slides and facilitation guides)
* `reference-spec/ ` _will_ contain formalized reference description including steps required, hardware, software and scripts, and mesh naming convention materials
* `tutorial/ ` _will_ contain introductory materials for connecting to a mesh network using a pi3
* `workshops/` contains workshops materials (including slides and facilitation guides)

The organization of this is based on outreach materials conversations on [May 20](https://github.com/tomeshnet/documents/blob/master/meeting_notes/20160520_outreach-session-notes.md) and [June 02](https://github.com/tomeshnet/documents/blob/master/meeting_notes/20160602_outreach-session-notes.md).

## Presentations

Presentations are currently using the presentation tool [showoff](https://puppetlabs.github.io/showoff/).

### Viewing Presentations

Static versions of presentations are always available online at [tomeshnet.github.io/tomesh.101/](https://tomeshnet.github.io/tomesh.101/)

### Running Presentations

If you would like to run presentations locally or make changes you'll have to do the following:

1. Clone this repository to your computer.

2. Install [showoff](https://github.com/puppetlabs/showoff/), showoff is written in ruby and comes as a packaged gem

    ```
    $ gem install showoff
    ```

2. Run showoff from the repository `presentations/<presentation-name> ` directory

    ```
    $ showoff serve
    ```

3. To view, in your preferred browser navigate to:

    ```
    http://0.0.0.0:9090
    ```
