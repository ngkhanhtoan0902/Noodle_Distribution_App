import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyCLrpuLK38_Ucx_-Xksj4zQvvfeF4w3PPA",
    authDomain: "reactnativedatabase-a5682.firebaseapp.com",
    databaseURL: "https://reactnativedatabase-a5682-default-rtdb.firebaseio.com",
    projectId: "reactnativedatabase-a5682",
    storageBucket: "reactnativedatabase-a5682.appspot.com",
    messagingSenderId: "237696736687",
    appId: "1:237696736687:web:79fc5e6af232851e8a635a",
    measurementId: "G-G3HWB0WM8V"
  };

const app = initializeApp(firebaseConfig);
const data = getAnalytics(app);
export default data;