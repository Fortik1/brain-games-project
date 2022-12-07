#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNumber, neydacha, Congratulations } from '../src/index.js';
import * as userName from '../src/cli.js';

const name = userName();

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
  const znak = randomNumber(3);
  let otvet = 0;
  const numberOne = randomNumber();
  const numberTwo = randomNumber();

  if (znak === 0) {
    console.log(`Question: ${numberOne} + ${numberTwo}`);
    otvet = numberOne + numberTwo;
  } else if (znak === 1) {
    console.log(`Question: ${numberOne} - ${numberTwo}`);
    otvet = numberOne - numberTwo;
  } else if (znak === 2) {
    console.log(`Question: ${numberOne} * ${numberTwo}`);
    otvet = numberOne * numberTwo;
  }

  const otvetUser = readlineSync.question('Your answer: ');

  const result = neydacha(otvet, otvetUser, name);

  if (result === 1) {
    break;
  }

  Congratulations(name, i);
}
