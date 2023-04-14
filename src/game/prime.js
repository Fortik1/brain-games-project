#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { neydacha, Congratulations, primeNumber } from '../index.js';

export default () => {
  const name = userName();

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const otvet = primeNumber();
    const otvetUser = readlineSync.question('Your answer: ');
    const res = neydacha(otvet, otvetUser, name);
    if (res === 1) break;
    Congratulations(name, i);
  }
};
