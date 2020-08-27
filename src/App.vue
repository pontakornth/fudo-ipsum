<template>
  <div id="app">
    <h1 class="heading">Fudo Ipsum</h1>
    <span>Lorem Ipsum for people of culture</span>
    <form class="selection-form">
        <label class="label-heading" for="types">Select types you need</label>
        <div class="checkboxes">
          <label class="label-checkbox">
            <input v-model="rawOptions" name="raw-option" type="checkbox" value="waifu">
              <span class="label-text">Waifu</span>
          </label>
          <label class="label-checkbox">
            <input v-model="rawOptions" name="raw-option" type="checkbox" value="husbando">
              <span class="label-text">Husbando</span>
          </label>
          <label class="label-checkbox">
            <input v-model="rawOptions" name="raw-option" type="checkbox" value="waifuHusbando">
              <span class="label-text">WaifuHusbando</span>
          </label>
        </div>
        <label class="label-length">
          <span class="label-text">Length (words)</span>
          <input v-model="length" class="textbox" name="length" type="number" value="0">
        </label>
        <button @click.prevent="generateLorem" class="button">Generate</button>
    </form>
    <div v-if="loremIpsum" class="output">
      {{loremIpsum}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { generate, GenerateOptions } from './utils/generate';

@Component
export default class App extends Vue {
  loremIpsum = '';

  rawOptions = [];

  length = 0;

  // TODO: Add better way to check the option
  @Watch('rawOptions')
  onRawOptionsChanged(val: Array<string>) {
    if (val.includes('waifu')) {
      this.options.waifu = true;
    } else {
      this.options.waifu = false;
    }

    if (val.includes('husbando')) {
      this.options.husbando = true;
    } else {
      this.options.husbando = false;
    }
  }

  options: GenerateOptions = { waifu: false, husbando: false };

  generateLorem(): void {
    this.loremIpsum = generate(this.options as GenerateOptions);
  }
}
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
  @apply p-4 border border-green-200 rounded flex flex-col justify-center items-center w-3/4;
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

.textbox {
  @apply border border-green-300 p-2;
}

.label-heading {
  @apply font-bold py-4 w-3/4;
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

.output {
  @apply border border-green-600 my-4 w-3/4 mx-auto text-left p-2;
  min-height: 12em;
}

@screen md {
  .selection-form {
    @apply w-1/2;
  }
  .label-heading {
    @apply w-1/2;
  }
  .output {
    @apply w-1/2;
  }
}

</style>
