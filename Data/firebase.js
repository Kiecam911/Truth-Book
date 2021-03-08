// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyCzE6JPWGN-g3OX0-qmSDSdqRcf6IZCihg",
//     authDomain: "truth-book.firebaseapp.com",
//     databaseURL: "https://truth-book-default-rtdb.firebaseio.com",
//     projectId: "truth-book",
//     storageBucket: "truth-book.appspot.com",
//     messagingSenderId: "817089842810",
//     appId: "1:817089842810:web:062f6058009099eddef5c3",
//     measurementId: "G-8S5XBX7FH6"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzE6JPWGN-g3OX0-qmSDSdqRcf6IZCihg",
  authDomain: "truth-book.firebaseapp.com",
  databaseURL: "https://truth-book-default-rtdb.firebaseio.com",
  projectId: "truth-book",
  storageBucket: "truth-book.appspot.com",
  messagingSenderId: "817089842810",
  appId: "1:817089842810:web:062f6058009099eddef5c3",
  measurementId: "G-8S5XBX7FH6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
