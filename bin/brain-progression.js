#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { neydacha, Congratulations, createArray } from '../src/index.js';
import * as userName from '../src/cli.js';

const name = userName();

console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

for (let i = 0; i < 3; i += 1) {
  const otvet = createArray();
  const otvetUser = readlineSync.question('Your answer: ');

  const result = neydacha(otvet, otvetUser, name);

  if (result === 1) {
    break;
  }

  Congratulations(name, i);
}
