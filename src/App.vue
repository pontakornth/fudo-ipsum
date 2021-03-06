<template>
  <div id="app" class="container">
    <h1 class="heading">Fudo Ipsum</h1>
    <span class="description">Lorem Ipsum for people of culture</span>
    <form class="selection-form">
        <label class="label-heading" for="types">Select types you need</label>
        <span class="text-red-500 text-xl"
              v-for="i in [checkboxError,lengthError, paragraphError]"
              :key="i">
          {{i}}
        </span>
        <div class="checkboxes">
          <label class="label-checkbox">
            <input v-model="rawOptions" name="raw-option" type="checkbox" value="waifu">
              <span class="label-text">Waifu</span>
          </label>
          <label class="label-checkbox">
            <input v-model="rawOptions" name="raw-option" type="checkbox" value="husbando">
              <span class="label-text">Husbando</span>
          </label>
        </div>
        <div class="length-wrapper">
          <label class="label-length">
            <span class="label-text">Length (words)</span>
            <input v-model="options.length" class="textbox" name="length" type="number" value="0">
          </label>
          <label class="label-length">
            <span class="label-text">Paragraph</span>
            <input v-model="paragraphs" class="textbox" name="length" type="number" value="0">
          </label>
        </div>
        <button @click.prevent="generateLorem" class="button">Generate</button>
    </form>
    <div v-if="loremIpsum" class="output flex flex-wrap justify-center">
      <p class="w-full whitespace-pre-line" >{{loremIpsum}}</p>
      <button @click="copyToClipboard" class="button">Copy to clipboard</button>
    </div>
  </div>
</template>

<script lang="ts">
import './assets/base.css';
import {
  Component, Vue, Watch,
} from 'vue-property-decorator';
import { generateParagraph, GenerateOptions } from './utils/generate';

interface FormError {
  checkboxError?: string;
  lengthError?: string;
}

@Component
export default class App extends Vue {
  loremIpsum = '';

  rawOptions = [];

  paragraphs = 1;

  get paragraphError() {
    return this.paragraphs <= 0 ? 'You must generate at least one paragraph' : '';
  }

  get lengthError() {
    return this.options.length && this.options.length <= 0 ? 'You must generate at least one word' : '';
  }

  get checkboxError() {
    return this.rawOptions.length === 0 ? 'You must use at least one option' : '';
  }

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

  options: GenerateOptions = { waifu: false, husbando: false, length: 20 };

  generateLorem(): void {
    if (!(this.paragraphError || this.lengthError || this.checkboxError)) {
      this.loremIpsum = generateParagraph(this.options, this.paragraphs);
    }
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.loremIpsum);
  }
}
</script>

<style lang="postcss">

#app {
  @apply text-center flex justify-center flex-row flex-wrap m-auto;
}

.heading {
  @apply text-5xl text-white font-black pb-2 px-4 pt-4 w-full;
}
.description {
  @apply text-lg text-gray-100 block w-full;
}

.selection-form {
  @apply p-4 rounded flex flex-col justify-center items-center w-10/12;
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

.length-wrapper {
  @apply grid;
  grid-gap: 4px;
  grid-template-columns: repeat(2, 1fr);
}

.textbox {
  @apply border border-green-300 p-2;
}

.label-heading {
  @apply font-bold pt-4 w-3/4 my-0 text-3xl w-full;
}

.label-checkbox {
  @apply text-left w-full block;
}

.label-text {
  @apply p-2 text-lg;
}

.button {
  @apply p-2 border border-green-100 bg-green-600 text-white flex-grow-0 block;
}

.button:hover {
  @apply bg-green-500;
}

.output {
  @apply border bg-green-200 border-green-600 my-4 w-10/12 mx-auto text-left p-2;
}

@screen md {
  .selection-form {
    @apply w-full;
  }
  .label-heading {
    @apply w-1/2;
  }
  .output {
    @apply w-1/2;
  }
  .length-wrapper {
    grid-gap: 0;
  }
}

</style>
