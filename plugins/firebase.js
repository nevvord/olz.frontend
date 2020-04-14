import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyCVkGOBfMv63pQYCzIYLRyyd2Znw7HeGMo",
   authDomain: "nevvord-tetsting.firebaseapp.com",
   databaseURL: "https://nevvord-tetsting.firebaseio.com",
   projectId: "nevvord-tetsting",
   storageBucket: "nevvord-tetsting.appspot.com",
   messagingSenderId: "77546076054",
   appId: "1:77546076054:web:0d93dcae4a2f3fefad0fb7",
   measurementId: "G-9VE2TLXDZS"
 };
 // Initialize Firebase

 let app = null

 if(!firebase.app.length) {
     app = firebase.initializeApp(firebaseConfig);
    //  firebase.analytics();
 }

export default firebase

