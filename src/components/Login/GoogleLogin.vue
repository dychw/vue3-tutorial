<template>
  <section class="mt-5 text-center">
    <button class="border px-2 rounded" @click="loginWithGoogle">
      Login With Google
    </button>
  </section>
</template>

<script>
import firebase from "../../utilities/firebase";
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$emit("close-login-from-google");
        })
        .catch((error) => {
          console.log(`code: ${error.code}`);
          console.log(`message: ${error.message}`);
          console.log(`credential: ${error.credential}`);
        });
    },
  },
};
</script>

<style></style>
