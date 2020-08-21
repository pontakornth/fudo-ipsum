const waifus = ['Skadi', 'Amiya', 'Darknesss', 'Blue Poison'];
const husbandos = ['Silver Ash', 'Flamebringer', 'Sasuke', 'Itachi'];

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
    loremIpsumOutput.push(loremIpsumPool[Math.random() * loremIpsumPool.length]);
  }
  return loremIpsumPool.join(' ');
};
