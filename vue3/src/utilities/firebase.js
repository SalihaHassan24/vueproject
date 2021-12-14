//import * as firebase from "firebase/app";
//import { initializeApp } from "firebase/app";
//import "firebase/auth";
//import "firebase/database";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHIkU1ARGShwyy6tjyAKhrQcocClErLaA",
  authDomain: "vue3-208de.firebaseapp.com",
  projectId: "vue3-208de",
  storageBucket: "vue3-208de.appspot.com",
  messagingSenderId: "677135951044",
  appId: "1:677135951044:web:e271cd68c5d94062a69591"
};

//firebase.initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);

//const db = firebase.database();
//export const chatsRef = db.ref("chats");

//export default (firebase, app);

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
export default firebase;
