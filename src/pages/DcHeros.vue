<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heroes {{ herosCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="hero.name"
      >
        <div>{{ hero.name }}</div>
        <button @click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded"
        v-model.lazy.trim="newHero"
        placeholder="Type Hero Name Here"
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-l from-blue-700 to-gray-300 text-sm text-gray-100"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newHero: "",
      dcHeros: [
        { name: "SuperGirl" },
        { name: "Flash" },
        { name: "Arrow" },
        { name: "Batman" },
        { name: "Superman" },
      ],
    };
  },
  mounted() {
    this.$refs.newHeroRef.focus();
  },
  computed: {
    herosCount() {
      return this.dcHeros.length;
    },
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeros.push({ name: this.newHero });
        this.newHero = "";
      }
    },
    remove(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i !== index);
    },
  },
};
</script>

<style></style>
