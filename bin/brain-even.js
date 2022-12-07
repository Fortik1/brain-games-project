#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as userName from '../src/cli.js';
import { Congratulations, neydacha } from '../src/index.js';

const name = userName();

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const random = Math.floor(Math.random() * 21);
  let otvet = '';
  let yesOrNo = '';

  console.log(`Question: ${random}`);
  otvet = readlineSync.question('Your answer: ');
  yesOrNo = random % 2 === 0 ? 'yes' : 'no';

  const result = neydacha(yesOrNo, otvet, name);

  if (result === 1) {
    break;
  }

  Congratulations(name, i);
}
