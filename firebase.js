import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDLXhZkEOrbzbsIwiTlxMeh8yF1hfCW3Ao",
  authDomain: "cross-lab-f9d9a.firebaseapp.com",
  databaseURL: "https://cross-lab-f9d9a-default-rtdb.firebaseio.com",
  projectId: "cross-lab-f9d9a",
  storageBucket: "cross-lab-f9d9a.appspot.com",
  messagingSenderId: "560630947349",
  appId: "1:560630947349:web:9528a532923b15c92ff81c",
  measurementId: "G-ZDP4C3YLTJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
