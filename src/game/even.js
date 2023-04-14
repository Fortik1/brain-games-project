#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { сongratulations, checkAnswer, getRandomNumber } from '../index.js';

export default () => {
  const nameUser = userName();
  const roundToWin = 3;

  console.log(`Hello, ${nameUser}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < roundToWin; i += 1) {
    const random = getRandomNumber();

    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = random % 2 === 0 ? 'yes' : 'no';

    const result = checkAnswer(answer, userAnswer, nameUser);

    if (result === 1) {
      break;
    }

    сongratulations(nameUser, i);
  }
};
