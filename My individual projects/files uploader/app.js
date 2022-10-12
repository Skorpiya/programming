import firebase from 'firebase'
import 'firebase/storage'

import {upload} from './upload.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4sCU5gwP9WmoZ2DQm4Osw7vyM_MQXij0",
  authDomain: "pictad-uploader.firebaseapp.com",
  projectId: "pictad-uploader",
  storageBucket: "pictad-uploader.appspot.com",
  messagingSenderId: "743458059125",
  appId: "1:743458059125:web:2fd059e162b289fd32993c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = firebase.storage()

upload('#file', {
  multi: true,
  accept: ['.png', '.jpg', 'jpeg', '.gif'],
  onUpload(files) {
    console.log('Files: ', files)
  }
})