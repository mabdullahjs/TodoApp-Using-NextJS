import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCVlwAK91EPoYGGMQyWoBhDAVyfujFjPjo",
    authDomain: "todo-322.firebaseapp.com",
    projectId: "todo-322",
    storageBucket: "todo-322.appspot.com",
    messagingSenderId: "1095750884690",
    appId: "1:1095750884690:web:d8603328df3910bcf96e8b",
    measurementId: "G-VG433HSDWS"
  };


const app = initializeApp(firebaseConfig);

export default app;