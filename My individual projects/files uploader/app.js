// import firebase from 'firebase'
// import 'firebase/storage'

import {upload} from './upload.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";
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
const firebase = initializeApp(firebaseConfig);

const storage = getStorage();
const storageRef = ref(storage);

upload('#file', {
  multi: true,
  accept: ['.png', '.jpg', 'jpeg', '.gif'],
  onUpload(files, blocks) {
    files.forEach((file, index) => {
      const myref = ref(storage, `images/${file.name}`)
      const task = uploadBytesResumable(myref, file);

      task.on('state_changed', snapshot => {
        const percentage = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) + '%'
        const block = blocks[index].querySelector('.preview-info-progress')
        block.textContent = percentage
        block.style.width = percentage
      }, 
      error => { 
        console.log(error)
      }, 
      () => {
        getDownloadURL(task.snapshot.ref).then((downloadURL) => {
          console.log('File ' + file.name + ' is available at', downloadURL);
        });
      });
    })
  }
})