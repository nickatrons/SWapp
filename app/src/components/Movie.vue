<template>
  <li>
    <h3>{{ movie.title }}</h3>
    <span>Released {{movie.release_date}}</span>
    <span>Produced by {{movie.producer}}</span>
    <span>
      <button @click="getStarships(movie.starships)">Show me the starships! :O</button>
    </span>
    <div v-if="starships.length">
      <ul>
          <Starship 
          v-for="item in starships" :key="item.name"
          :starshipData="item" />
      </ul>
    </div>
  </li>
</template>

<script lang="ts">
// <script lang="ts">
// import Vue from "vue";
import Starship from "@/components/Starship.vue";
import { ServiceGetter } from "../service/service";
const serviceGetter = new ServiceGetter();

// export default Vue.extend({
export default {
  name: "movie",
    data() {
      return {
        starships: []
      };
    },
  props: {
    movie: Object,
    item: Object
  },
  components: {
    Starship
  },
    methods: {
      async getStarships(movie) {
      // async getStarships(movie: []) {
        this.loading = true;
        movie.forEach(async element => {
          const data = await serviceGetter.getStarship(element);
          this.starships.push(data);
        });
      }
    }
};
// });
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-top: 1px solid;
  button {
    margin-top: 10px;
  }
}
ul {
    padding: 0;
}
</style>