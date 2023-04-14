#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { checkAnswer, сongratulations, getRandomNumber } from '../index.js';
import userName from '../cli.js';

const createProgressionArray = () => {
  const array = [getRandomNumber()];
  const range = getRandomNumber(1, 5);
  const arrayLength = 10;
  for (let index = 0; index < arrayLength; index++) {
    array.push(array[index] + range);
  }
  const latentNumberIndex = getRandomNumber(0, arrayLength);
  const answer = array[latentNumberIndex];
  array[latentNumberIndex] = '..';
  return { array, answer };
}

export default () => {
  const nameUser = userName();
  const roundToWin = 3;

  console.log(`Hello, ${nameUser}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < roundToWin; i += 1) {
    const { array, answer } = createProgressionArray();
    console.log('Question:', array.join(' '));

    const userAnswer = readlineSync.question('Your answer: ');

    const result = checkAnswer(answer, userAnswer, nameUser);

    if (result === 1) {
      break;
    }

    сongratulations(nameUser, i);
  }
};
