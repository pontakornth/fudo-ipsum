<template>
  <div id="app">
    <h1 class="heading">Fudo Ipsum</h1>
    <span>Lorem Ipsum for people of culture</span>
    <form class="selection-form">
        <label for="types">Select types you need</label>
        <input type="checkbox" value="Waifu"><label>Waifu</label>
        <input type="checkbox" value="Husbando"><label>Husbando</label>
        <input type="checkbox" value="WaifuHusbando"><label>WaifuHusbando</label>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  @apply text-center;
}

.heading {
  @apply text-5xl font-black pb-2 px-4 pt-4;
}
.description {
  @apply text-sm;
}
</style>
