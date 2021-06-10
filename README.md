# UI-Auth-template-Using-React


<p align="center">
  <a href="https://github.com/Code-Mergers/UI-Auth-Template-Using-React">
    <img src="images/logo.png" alt="Logo">
  </a>
</p>

## Installation
- Download or clone the repo into your local directory from [Here](https://github.com/Code-Mergers/UI-Auth-Template-Using-React)
- Make sure that you have node installed in your computer or [Install Node](https://nodejs.org/en/)
- Inside the local directory here you have downloaded this repo, open your terminal
- Run this command to download all dependencies for this project
  - `npm i` or `npm install`
- To use Firebase Authentication, you have to provide your firebase configuration object containing keys and identifiers for your app
  - [Go to firebase](https://firebase.google.com/) and signin
  - [Go to firebase console](https://console.firebase.google.com/) to create your project
  - Create a web app and read about [firebase web app](https://firebase.google.com/docs/web/setup)
  - You will get your firebase configuration object containing keys and identifiers in project settings section
  - In SDK setup and configuration section copy the config, looks like this  
    ```
        var firebaseConfig = {
        apiKey: "API_KEY",
        authDomain: "PROJECT_ID.firebaseapp.com",
        databaseURL: "https://PROJECT_ID.firebaseio.com",
        projectId: "PROJECT_ID",
        storageBucket: "PROJECT_ID.appspot.com",
        messagingSenderId: "SENDER_ID",
        appId: "APP_ID",
        measurementId: "G-MEASUREMENT_ID",
    };
  - Paste your config object in `env.js` file, present in `/src/firebase/`
- Now we can run this site locally 
- To see the site in your localhost run this command in your terminal
  - `npm start`

## Deployement
- [See deployed site](https://react-ui-auth-template-code-mergers.netlify.app/)


### Hope this will be helpful for your next project
#### Thank you for visiting
