<template>
  <div id="app">
    <h1 class="heading">Fudo Ipsum</h1>
    <span>Lorem Ipsum for people of culture</span>
    <form class="selection-form">
        <label class="label-heading" for="types">Select types you need</label>
        <div class="checkboxes">
          <label class="label-checkbox"><input type="checkbox" value="Waifu">
              <span class="label-text">Waifu</span>
          </label>
          <label class="label-checkbox"><input type="checkbox" value="Husbando">
              <span class="label-text">Husbando</span>
          </label>
          <label class="label-checkbox"><input type="checkbox" value="WaifuHusbando">
              <span class="label-text">WaifuHusbando</span>
          </label>
        </div>
        <button class="button">Generate</button>
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

.selection-form {
  @apply p-4 border border-green-200 rounded flex flex-col justify-center items-center w-1/2;
  @apply mx-auto;
}

.selection-form * {
  @apply my-2;
}

.checkboxes {
  @apply w-1/2;
}

.checkboxes * {
  @apply my-0;
}

.label-heading {
  @apply font-bold py-4 w-1/2;
}

.label-checkbox {
  @apply text-left w-full block;
}

.label-text {
  @apply p-2;
}

.button {
  @apply p-2 border border-green-100 bg-green-600 text-white;
}

.button:hover {
  @apply bg-green-500;
}

</style>
