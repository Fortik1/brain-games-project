#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomNumber, checkAnswer, сongratulations } from '../index.js';
import userName from '../cli.js';

export default () => {
  const nameUser = userName();
  const roundToWin = 3;

  console.log(`Hello, ${nameUser}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < roundToWin; i += 1) {
    const signs = ['+', '-', '*'];
    const activeSign = signs[getRandomNumber(0, 3)];
    const numberOne = getRandomNumber();
    const numberTwo = getRandomNumber();
    let answer;

    switch(activeSign) {
      case '+': {
        answer = numberOne + numberTwo;
        break;
      }
      case '-': {
        answer = numberOne - numberTwo;
        break;
      }
      case '*': {
        answer = numberOne * numberTwo;
        break;
      }
    };

    console.log(`Question: ${numberOne} ${activeSign} ${numberTwo}`);

    const answerUser = readlineSync.question('Your answer: ');

    const result = checkAnswer(answer, answerUser, nameUser);

    if (result === 1) { // Stops the game after a loss.
      break;
    }

    сongratulations(nameUser, i);
  }
};
