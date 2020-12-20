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
import { onMounted, ref, computed } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeros = ref([
      { name: "SuperGirl" },
      { name: "Flash" },
      { name: "Arrow" },
      { name: "Batman" },
      { name: "Superman" },
    ]);
    const herosCount = computed({
      get: () => dcHeros.value.length,
    });

    onMounted(() => {
      newHeroRef.value.focus();
    });

    function remove(index) {
      dcHeros.value = dcHeros.value.filter((hero, i) => i !== index);
    }

    function addHero() {
      if (newHero.value !== "") {
        dcHeros.value.push({ name: newHero.value });
        newHero.value = "";
      }
    }

    return { dcHeros, newHero, remove, addHero, newHeroRef, herosCount };
  },
};
</script>

<style></style>
