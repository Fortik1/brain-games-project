export function randomNumber(max = 30) {
  return Math.floor(Math.random() * max);
}

export function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

export function neydacha(otvet, otvetUser, name) {
  let res = 0;
  if (Number(otvetUser) === Number(otvet)) {
    if (Number(otvetUser) === otvet) {
      console.log('Correct!');
    } else {
      console.log(`'${otvetUser}' if wrong answer  ;(. Correct answer was '${otvet}'. \nLet's try again, ${name}!`);
      res = 1;
    }
  } else if (otvetUser === otvet) {
    console.log('Correct!');
  } else {
    console.log(`'${otvetUser}' if wrong answer  ;(. Correct answer was '${otvet}'. \nLet's try again, ${name}!`);
    res = 1;
  }
  return res;
}

export function Congratulations(name, i) {
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}

export function createArray() {
  const array = [];
  const numberDis = randomNumber(6) + 1;
  const numberStart = randomNumber();
  const arrayLen = 10;
  array.push(numberStart);
  for (let l = 0; l < arrayLen; l += 1) {
    array.push(array[l] + numberDis);
  }
  const index = randomNumber(arrayLen);
  const otvet = array[index];
  array[index] = '..';
  console.log('Question:', array.join(' '));
  return otvet;
}

export function primeNumber() {
  const number = randomNumber();
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
