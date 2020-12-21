import { firebase } from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAgiGGhlprDwA_hGgXczt8aQIMmLPBpxOY",
  authDomain: "vue-full-course-7b448.firebaseapp.com",
  projectId: "vue-full-course-7b448",
  storageBucket: "vue-full-course-7b448.appspot.com",
  messagingSenderId: "251330472677",
  appId: "1:251330472677:web:4405d4590ab34c5aeec20c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;
