import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5zrU_1W6O2iLWRKY_L8gMxBFSnzVz15Y",
  authDomain: "fir-test-e3d0d.firebaseapp.com",
  projectId: "fir-test-e3d0d",
  storageBucket: "fir-test-e3d0d.appspot.com",
  messagingSenderId: "808774286423",
  appId: "1:808774286423:web:b8c5e631c45db026c67712",
  measurementId: "G-PGRLC5L9PE",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
