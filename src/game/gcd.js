#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  NOD, randomNumber, neydacha, Congratulations,
} from '../index.js';
import userName from '../cli.js';

export default () => {
  const name = userName();

  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const numberOne = randomNumber(100) + 1;
    const numberTwo = randomNumber(100) + 1;
    const otvet = NOD(numberOne, numberTwo);

    console.log(`Question: ${numberOne} ${numberTwo}`);
    const otvetUser = readlineSync.question('Your answer: ');

    const result = neydacha(otvet, otvetUser, name);

    if (result === 1) {
      break;
    }

    Congratulations(name, i);
  }
};
