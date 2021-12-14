<template>
<nav class="w-full bg-gradient-to-r from-blue-700 to-pink-500 text-white px-4 py-2">
    <router-link to="/"></router-link>
    <router-link v-for="item in list" :key="item.to" :to="item.to" class="mx-2">{{item.title}}</router-link>
    <!-- <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="openLogin">
      Login
    </button> -->
</nav>
</template>

<script>
// import firebase from "../utilities/firebase";
export default {
    data(){
        return{
            list: [
                {title: "DC Heros", to: "/dc-heros"},
                {title: "Calendar", to: "/calendar"},
                {title: "Markdown", to: "/markdown"},
                {title: "Slider Carousel", to: "/slider"},
                {title: "Calculator", to: "/calculator"},
                {title: "Reuseable Modal", to: "/reuseablemodal"},
            ]
        }
    },
//     computed: {
//     isLoggedIn() {
//       return this.$store.state.isLoggedIn;
//     },
//   },
//   methods: {
//     logout() {
//       firebase.auth().signOut();
//     },
//     openLogin() {
//       this.$store.commit("setLoginModal", true);
//     },
//   },
}
</script>

<style>

</style>