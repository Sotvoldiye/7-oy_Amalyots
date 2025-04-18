import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyD0TtYOI3HW8DuEWTAj_QMcC5EV3hBveCs",
  authDomain: "finance-ce394.firebaseapp.com",
  projectId: "finance-ce394",
  storageBucket: "finance-ce394.firebasestorage.app",
  messagingSenderId: "66003840183",
  appId: "1:66003840183:web:9e1c8330a4138636baf132",
  measurementId: "G-VFJYY1V5FS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);