<div align="center">

# MOI Hackathon App

[![ar](https://img.shields.io/badge/Language-Arabic-blue.svg)](README.ar.md)

Click on the button above for **Arabic**.

</div>


## 🚩 Table of Contents
- [❓ Problem Statement](#-problem-statement)
- [✔️ Solution](#%EF%B8%8F-solution)
- [🔎 Overview](#-overview)
- [🤖 Features](#-features)
  - [♿ Detect Accessibility](#-detect-accessibility)
  - [🧭 Navigator](#-navigator)
  - [👟 Proactive Service](#-proactive-service)
  - [🎮 Memory Game](#-memory-game)
  - [👮 Live Support (We are all Police)](#-live-support-we-are-all-police)
- [🔧 Used Tools](#-used-tools)
- [📦 Prerequisites](#-prerequisites)
- [🛠️ Development](#%EF%B8%8F-development)
  - [🌲 Environment Setup](#-environment-setup)
  - [🖥️ Building](#%EF%B8%8F-building)
- [⏬ Download](#-download)

## ❓ Problem Statement

With necessity of mobile devices in the lives of people, ease of use and accessibility has become a major concern for those impaired and the elderly. The MOI application is essential for one staying in UAE. With the multitudes of services available, people of determination may struggle using app and the elderly may find it cumbersome and common people may not know the functions the application offers. 

## ✔️ Solution

By checking existing device settings for accessibility. We configure the application at launch so that the user does not require to do. Thus reducing challeges people of determinatin may face 

The app intergrates the devices accessibility into the app to give a familiar and streamlined experience.

A falcon as navigator that helps the user navigate throught the app with speech and make app feel more friendly

Proactive Service, the app is aware when the user has some pending task or renewal for license or visa that are expiring and notifies the users and organizes the homepage with relevant services.

A memory game to help the user learn and remember what service is for what purpose to ease their future usage. 

We are all Police, a Live Support targeting people of determination and the elderly, allowing volunteers to connect and share your screen to help you with your needs.  

Details can be read further in [Features](#-features)

## 🔎 Overview

The project was developed using React Native.  React Native streamlines mobile development for both Android and IOS devices. This project has been tested to work on Android devices.

To simplify for demonstration purpose. We created mulitple modes that is meant to simulate how the experience would be based on different users and devices. To showcase the core functionality and idea, it does not go beyond features mentioned and a limited to number of accessibility feature intergrated. We do not have a server ready for Live support yet

**Future Plans that we would like to implement:**
- A light weight Natural Voice based AI for text to Speech. Making it easier to understand
- A simple AI for the Navigator Salam to handle more terms for navigating
- Fully intergrate it to work with system accessibility feature
- Make each of the featurers work seamlessly with each other
- Create a Secure Live Support system 

## 🤖 Features

### ♿ Detect Accessibility

Android and IOS have built-in support for various accessibility features such as TalkBack, Spoken Assistance, Visibility and Dexterity. By intergrating support for these features, we can automatically configure the app at launch.

- Automatic Font Adjustment
- Automatic Colour handling
- Automatic Text to Speech
- Handling of Touch to Read

### 🧭 Navigator

<div align="center"><img src="https://i.imgur.com/1UFUP3T.png" width="400"/>

**Salam, Your Personal Navigator**
</div>

- Helps visually impaired by informing contents on the pages

<div align="center"><img src="https://i.imgur.com/F6uWLyn.png" width="400"/></div>

- Talk to Salam to change settings

<div align="center"><img src="https://i.imgur.com/R9gZhim.png" width="400"/></div>

- Talk to Salam to navigate the app and fill in information

### 👟 Proactive Service

Salam will setup the home screens with services you will need. He will inform you if your Visa in need of renewal

<div align="center"><img src="https://i.imgur.com/vajECYz.png" width="400"/></div>


Enjoy a simplified and streamlined journey in the app. 

### 🎮 Memory Game

A fun and educational game where the user memorizes and learns about the various services offered and their usages.

<div align="center"><img src="https://i.imgur.com/ZTAs6An.png" width="400"/></div>

### 👮 Live Support (We are all Police)

A Live Support feature, designed to connect People of Determination and the Elderly to volunteers with screensharing functionality to help and guide the user. 

<div align="center"><img src="https://i.imgur.com/At9jDRp.png" width="400"/></div>

## 🔧 Used Tools

- [Visual Studio code](https://code.visualstudio.com/download)
- [React Native](https://reactnative.dev)
- [Github Actions](https://github.com/features/actions)

## 📦 Prerequisites

You may follow the [Development Guide](#-development) for setting up the Prerequisites

- Windows 10+
- [Android Studio](https://developer.android.com/studio)
- [Chocolatey](https://chocolatey.org/install)
- [Node.js](https://nodejs.org/en/download/current)
- [JDK 17](https://openjdk.java.net/projects/jdk/17/)
- [Git](https://git-scm.com/downloads)

## 🛠️ Development

Though React Native can be setup on MacOS and Linux. The following guide is meant for **Windows 10/11**.

### 🌲 Environment Setup

If already have the Enviroment Setup for your system for React Native. Skip to [Building](#building).

#### Install chocolatey

Chocolatey is package manager for windows. We will use it to install Node.js and OpenJDK 17

Open Powershell in adminstrator mode and run the following command to install chocolatey

```sh
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

#### Install Node.js and openJDK

```sh
choco install -y nodejs-lts microsoft-openjdk17
```

#### Setup Android Studio

Download [Android Studio](https://developer.android.com/studio). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

- Android SDK
- Android SDK Platform
- Android Virtual Device

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 14 (UpsideDownCake) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "More Actions" button or menu button top right and select "SDK Manager".

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 14 (UpsideDownCake) entry, then make sure Android SDK Platform 34 is checked.

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that `34.x.x` is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

#### Add Environment Variables

The React Native tools require some environment variables to be set up in order to build apps with native code. Create a user variable `ANDROID_HOME` that points to your Android SDK. By default it is `%LOCALAPPDATA%\Android\Sdk`.

1. Open the Windows Control Panel.
2. Click on User Accounts, then click User Accounts again
3. Click on Change my environment variables
4. Click on New... to create a new `ANDROID_HOME` user variable that points to the path to your Android SDK

Add the folder of platform-tools to path. By default it is `%LOCALAPPDATA%\Android\Sdk\platform-tools` 

1. Open the Windows Control Panel.
2. Click on User Accounts, then click User Accounts again
3. Click on Change my environment variables
4. Select the Path variable.
5. Click Edit.
6. Click New and add the path to platform-tools to the list.

### 🖥️ Building

**Start the Android Emulator**

Open Android Studio, click on "More Actions" button or menu button top right and select "Virtual Device Manager".

If you have recently installed Android Studio, you will need to create a new AVD. Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the UpsideDownCake API Level 34 image.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it.

**Clone the repository**

```sh
git clone https://github.com/AhmedAlfahal/InnovateX-Hackathon.git
```

**Enter the repository and install the required packages**

```sh
cd MOI_Hackathon
npm install
```

**Run the following command to build and deploy the app to the emulator.**

```sh
npm run android
```

# ⏬ Download

Download the apk file for Android [here](https://github.com/AhmedAlfahal/InnovateX-Hackathon/releases)
