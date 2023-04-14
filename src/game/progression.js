#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { neydacha, Congratulations, createArray } from '../index.js';
import userName from '../cli.js';

export default () => {
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
};
