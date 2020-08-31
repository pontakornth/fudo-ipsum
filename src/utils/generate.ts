import waifusFile from '../assets/waifus.yml';
import husbandoFile from '../assets/husbandos.yml';

const { waifus } = waifusFile;
const { husbandos } = husbandoFile;

export interface GenerateOptions {
    waifu: boolean;
    husbando: boolean;
    length?: number;
}

export const generate = (options: GenerateOptions): string => {
  let loremIpsumPool: Array<string> = [];
  const loremIpsumOutput: Array<string> = [];
  if (options.waifu) {
    loremIpsumPool = [...loremIpsumPool, ...waifus];
  }
  if (options.husbando) {
    loremIpsumPool = [...loremIpsumPool, ...husbandos];
  }
  const length = options.length || 10;
  for (let i = 0; i < length; i += 1) {
    loremIpsumOutput.push(loremIpsumPool[Math.floor(Math.random() * loremIpsumPool.length)]);
  }
  return loremIpsumOutput.join(' ');
};

export const generateParagraph = (options: GenerateOptions, amount: number): string => {
  const paragraphs: Array<string> = [];
  for (let i = 0; i < amount; i += 1) {
    paragraphs.push(generate(options));
  }
  return paragraphs.join('\n\n');
};
