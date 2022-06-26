 import * as firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyD3SydgZVt2Xz-vNLbSVldBIdmJWXdBTig",
  authDomain: "p-60-38f9f.firebaseapp.com",
  databaseURL: "https://p-60-38f9f-default-rtdb.firebaseio.com",
  projectId: "p-60-38f9f",
  storageBucket: "p-60-38f9f.appspot.com",
  messagingSenderId: "407864055684",
  appId: "1:407864055684:web:d2575856ae275e48676fd1"
};

let app = firebase.initializeApp(firebaseConfig);
export default app.database();