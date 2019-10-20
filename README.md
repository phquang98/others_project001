# **Others Project 001**

A mobile to-do application written using React Native for Android.\
The purpose of this repo is for learning and practice only.

## :smile: **Getting Started**

### How the project works

- 1st screen: the screen with a single button, click it to add new goals.
- 2nd screen: a screen contains all previously created goals
  - tap the goal element to delete it

## :computer: **Prerequisites/Built With**

- React Native using expo-cli
- ESLint
- Prettier
- React Native Debugger
- VSCode + extensions

## :page_facing_up: **Installing**

- clone it from this repo
- go to folder contains cloned files, type into terminal: `npm i`
- type `npm start` to initiate the DevTools that will be opened by web browser (equivalents to `expo start`)
- connection to the app
  - type `a` if you connect your device using cable
  - scan QR code if you connect the device using LAN

### Setting up your Android device

- connect using cables: make sure you had adb, can recognise phone and enable dev mode + debug through usb
- connect using LAN: make sure you are in same network, change connection to Tunnle if cant connect

## :car: **Deployment**

It is recommended you use a physical Android device for this project.

## :memo: **Notes**

- shake the device to enter Android debug mode for app
- use react native debugger
  - open the `setup.exe` file
  - use `ctrl + t` to choose port for the app (usually is 19001)
  - shake device to enter Remote JS Debugging -> the app will connect to react native debugger instead of chrome
  - you can do 3 things here in debugger
    - check elements compoes with their props, states and data in Element tab
    - check how compoes are re-render -> performance by recording in Profiler tab
    - check networking on the Network tab
- this repo has Github security alerts, cant fix atm
  - for more info, check [here](https://medium.com/codebrace/what-is-npm-audit-fix-bf1d7efefff7)
    

## :bell: **Contributing**

**This was intentionally left blank.**

## :speech_balloon: **Authors**

Check the credits.

## :grey_exclamation: **License**

**This was intentionally left blank.**

## :email: **Credits/Acknowledgments/References**

This project was done using this [tutorial](https://www.youtube.com/watch?v=qSRrxpdMpVc)
