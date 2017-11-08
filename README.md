# Ionic 2 QRScanner Sample Application

This is a sample Barcode Scanner application built on [Ionic 2](https://github.com/driftyco/ionic) and that uses [Ionic Native](https://github.com/driftyco/ionic-native)

## Setup

To setup this application locally, you'll have to clone the repository and install all the required libraries and plugins. Thankfully, Ionic provides an easy way with Ionic state

__NOTICE__: make sure you have the latest Ionic & Cordova CLI installed (`npm install -g ionic cordova`)

Steps:

- `git clone https://github.com/jadsalhani/ionic2-qrscanner-example.git`
- `cd ionic2-qrscanner-example`
- `yarn install`
- `ionic cordova platform add ios`

After these commands, your application is all ready to be built and deployed to the platform of your choice.

_ANDROID NOTICE_: For those who would like to build on Android, just simply run `ionic cordova platform add android`.

## Project Structure

It provides also some extra components to give it a little flavor:
- Login page template
- Event list page in case more than one QR should be scanned.
- Scan page template that scans a QRCode
- Scan result page that displays the Barcode/QR result after scanning
- Basic HTTP service to make API calls which comprises some helper methods
- Basic User Service to handle logging-in and simulating sessions
