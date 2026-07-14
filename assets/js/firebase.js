import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPe5XPA05znTPVhc9nPFhq0wJbbFBXPB4",
  authDomain: "lauren-s.firebaseapp.com",
  projectId: "lauren-s",
  storageBucket: "lauren-s.firebasestorage.app",
  messagingSenderId: "506862745057",
  appId: "1:506862745057:web:ddae9ee47369afb03d4ea0",
  measurementId: "G-52K78V0NH8"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);