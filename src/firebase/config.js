//import firebase from "firebase/app";
import "firebase/database";
import 'firebase/storage';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyBlZ4Bq7QO8gZIPzMcuHAi_sjdRkqw2_Kk",
    authDomain: "beanfactory2-77f23.firebaseapp.com",
    projectId: "beanfactory2-77f23",
    storageBucket: "beanfactory2-77f23.appspot.com",
    messagingSenderId: "233522293134",
    appId: "1:233522293134:web:e0e1febd0b94d271e31cdf"
  };

    //ini firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };

  