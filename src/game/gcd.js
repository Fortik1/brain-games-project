#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  GCD, getRandomNumber, checkAnswer, сongratulations,
} from '../index.js';
import userName from '../cli.js';

export default () => {
  const nameUser = userName();
  const roundToWin = 3;

  console.log(`Hello, ${nameUser}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < roundToWin; i += 1) {
    const numberOne = getRandomNumber(1, 100);
    const numberTwo = getRandomNumber(1, 100);
    const answer = GCD(numberOne, numberTwo);

    console.log(`Question: ${numberOne} ${numberTwo}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const result = checkAnswer(answer, userAnswer, nameUser);

    if (result === 1) {
      break;
    }

    сongratulations(nameUser, i);
  }
};
