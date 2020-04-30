// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
var firebaseConfig = {
  apiKey: "AIzaSyBjGEty3MCK71COtWJk-he936Xn2q_7gKk",
  authDomain: "zdoctor-e9625.firebaseapp.com",
  databaseURL: "https://zdoctor-e9625.firebaseio.com",
  projectId: "zdoctor-e9625",
  storageBucket: "zdoctor-e9625.appspot.com",
  messagingSenderId: "619214643343",
  appId: "1:619214643343:web:9d712ecfe17b2cf4a090fa",
  measurementId: "G-HBT80JXY12",
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
