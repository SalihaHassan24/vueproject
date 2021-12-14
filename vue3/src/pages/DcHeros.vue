<template>
  <div class="m-auto">
    <div class="text-2xl text-center">
      <h1 class="w-full bg-gradient-to-r from-blue-700 to-pink-500 text-white px-4 py-2 rounded">DC Heros list {{ heroCount }}</h1>
    </div>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        v-bind:key="hero.name"
      >
        <div>{{ hero.name }}</div>
        <button @click="removeHero(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" v-on:submit.prevent="addHero">
      <input
        class="border rounded"
        v-model="newHero"
        placeholder="Type Hero Name Here"
      />
      <button
        class="
          border
          rounded
          bg-gradient-to-r
          from-blue-700
          to-pink-500
          text-white
        "
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
      dcHeros: [{ name: "Flash" }, { name: "Arrow" }, { name: "SuperGirl" }],
    };
  },

  computed: {
    heroCount() {
      return this.dcHeros.length;
    },
  },

  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeros.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },
    removeHero(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i != index);
    },
  },
};
</script>

<style>
</style>