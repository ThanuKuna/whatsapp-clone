import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDJ_85Bj27UeaJhmOfxilG4aGl7FGazCgs",
    authDomain: "whatsapp-clone-5034d.firebaseapp.com",
    projectId: "whatsapp-clone-5034d",
    storageBucket: "whatsapp-clone-5034d.appspot.com",
    messagingSenderId: "359749611334",
    appId: "1:359749611334:web:6882230e2df13e4d12bf47",
    measurementId: "G-W7TFYXM1PK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvide();

  export {auth,provider};
  export default db;