import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBn4fVZOjzyNRpD7Te8iTHGNe57kA9U-rA",
    authDomain: "beanfactory-70ea4.firebaseapp.com",
    projectId: "beanfactory-70ea4",
    storageBucket: "beanfactory-70ea4.appspot.com",
    messagingSenderId: "981251022673",
    appId: "1:981251022673:web:6d0d6504902ac606213d70"
  };

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();


  export { projectStorage, projectFirestore}