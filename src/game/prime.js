#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../cli.js';
import { checkAnswer, сongratulations, primeNumber } from '../index.js';

export default () => {
  const nameUser = userName();
  const roundToWin = 3;

  console.log(`Hello, ${nameUser}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < roundToWin; i += 1) {
    const answer = primeNumber();
    const answerUser = readlineSync.question('Your answer: ');
    const res = checkAnswer(answer, answerUser, nameUser);
    if (res === 1) break;
    сongratulations(nameUser, i);
  }
};
