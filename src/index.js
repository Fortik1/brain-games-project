export function getRandomNumber(min = 1, max = 30) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function GCD(x, y) {
  if (y > x) return GCD(y, x);
  if (!y) return x;
  return GCD(y, x % y);
}

export function checkAnswer(answer, userAnswer, nameUser) {
  let res = 0;
  if (`${answer}` === `${userAnswer}`) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' if wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${nameUser}!`);
    res = 1;
  }
  return res;
}

export function сongratulations(nameUser, i) {
  if (i === 2) {
    console.log(`Congratulations, ${nameUser}!`);
  }
}

export function primeNumber() {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  if (number === 1 || number === 0) {
    return 'no';
  } if (number === 2) {
    return 'yes';
  }
  for (let x = 2; x < number; x += 1) {
    if (number % x === 0) {
      return 'no';
    }
  }
  return 'yes';
}
