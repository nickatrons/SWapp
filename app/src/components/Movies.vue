<template>
  <div class="flex">
    <h2>Give me a Star Wars movies overview!</h2>
    <button @click="getAllMovies()">Hit me</button>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <transition name="fade">
        <div v-if="loading">Loading...</div>
      </transition>

      <ul>
        <Movie v-for="item in items" v-bind:key="item.title" v-bind:movie="item" />
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Movie from "@/components/Movie.vue";
import { ServiceGetter } from "../service/service";
const serviceGetter = new ServiceGetter();

export default Vue.extend({
  data() {
    return {
      items: null,
      loading: false,
      errored: false,
      moviesCount: null,
      test: { title: "yoyo" },
      starships: []
    };
  },
  components: {
    Movie
  },
  methods: {
    async getAllMovies() {
      this.loading = true;
      const data = await serviceGetter.getMovies();
      this.loading = false;
      console.log(data);
      this.items = data.results;
    }
  }
});
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul {
  padding: 0;
}
</style>