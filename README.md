# RaceDay

Do you enjoy running marathons, but your loved ones _refuse_ to wait at the finish line for you because you take too long? This app aims to solve this issue by allowing your _fans_ to subscribe to your current location, and receive live updates. They can be notified at mile markers, or an estimated arrival time to the finish line (i.e. 10 minutes until you finish). Now **everyone** can cheer you on!

## Installation

1. Follow install process for [Meteor](https://www.meteor.com/install).
2. Follow install process for [React Native](https://facebook.github.io/react-native/docs/getting-started.html#content).
3. Clone repository onto your local machine.
4. Install [Sketch](https://www.sketchapp.com/) app for Mac to view design.

## Usage

**NOTE:** Must run _Meteor_ server before running _React Native_ app, otherwise a silent error will occur. This is because the mobile apps are looking to connect to the Mongo database in the Meteor application's server.

### Meteor

1. Open terminal.
2. ```cd ./MeteorApp```
3. Run ```meteor npm install --save react react-dom react-controllables google-map-react
react-mounter```
3. Run the Meteor application with ```meteor``` command.
4. Once server is running, go to [http://localhost:3000/](http://localhost:3000/)
5. Leave the server running, and open a new tab in your terminal.

### React Native

#### iOS:
With _Meteor_ server running, in a new tab:

1. ```cd ../RNApp```.
2. Run ```npm install```.
3. Launch app on simulator: ```react-native run-ios```.

#### Android:
With _Meteor_ server running, in a new tab:

1. Run ```android avd``` command.
2. Select emulator, then click start button to run.
3. In new terminal tab, run ```react-native run-android```.
