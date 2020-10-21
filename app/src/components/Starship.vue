<template>
  <li class="starship-container">
    <span>
      Starship name:
      <em>
        <b>{{starshipData.name}}</b>
      </em>
    </span>
    <span>
      Class:
      <em>{{starshipData.starship_class}}</em>
    </span>
    <span>
      Crew:
      <em>{{starshipData.crew}}</em>
    </span>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    starshipData: Object
  }
});
</script>

<style lang="scss" scoped>
.starship-container {
  font-size: small;
  border-top: 1px dotted grey;
}
</style>