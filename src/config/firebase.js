import { initializeApp } from "firebase/app";

import 'firebase/firestore';
// import { getFirestore } from "firebase/firestore";

import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAmjVCVKV8me1BWLLnmltkfnVktrElsR0M",
  authDomain: "brus-75208.firebaseapp.com",
  databaseURL: "https://brus-75208.firebaseio.com",
  projectId: "brus-75208",
  storageBucket: "brus-75208.appspot.com",
  messagingSenderId: "666998852478",
  appId: "1:666998852478:web:ad8e97eadc2a5732de012f",
  measurementId: "G-V1ZC89Q5ZH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)

export default (app,db);




// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyD0Z2DzlrHE3oSumppOAUcFA51fOQfdfqk",
//   authDomain: "betonn-8560a.firebaseapp.com",
//   projectId: "betonn-8560a",
//   storageBucket: "betonn-8560a.appspot.com",
//   messagingSenderId: "404130189314",
//   appId: "1:404130189314:web:3858ef293056d14e88171b",
//   measurementId: "G-C5QXXF1SJ3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);


// export default (app);