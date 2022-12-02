export function randomNumber(max = 30) {
    return Math.floor(Math.random() * max);
}

export function NOD (x, y) {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
}

export function neydacha(otvet, otvetUser, name) {
    if (Number(otvetUser) === Number(otvet)) {
        if (Number(otvetUser) === otvet) {
            console.log(`Correct!`);
        } else {
            console.log(`'${otvetUser}' if wrong answer  ;(. Correct answer was '${otvet}'. \nLet's try again, ${name}!`);
            return 1;
        }
    } else {
        if (otvetUser === otvet) {
            console.log(`Correct!`);
        } else {
            console.log(`'${otvetUser}' if wrong answer  ;(. Correct answer was '${otvet}'. \nLet's try again, ${name}!`);
            return 1;
        }
    }
}

export function Congratulations(name, i) {
    if (i === 2) {
        console.log(`Congratulations, ${name}!`);
    }
}

export function createArray(numberDis, numberStart, arrayLen) {
    var array = [];
    array.push(numberStart);
    for (var l = 0; l < arrayLen; l++) {
        array.push(array[l] + numberDis);
    }
    var index = randomNumber(arrayLen),
    otvet = array[index];
    array[index] = '..' ;
    console.log(`Question:`, array.join(' '));
    return otvet;
}

export function primeNumber() {
    var number = randomNumber(); 
    console.log(`Question: ${number}`);
    for (var i = 2;i < number / 2; i++) {
        if (number % i === 0) {
            return 'no';
        }
    }
    return 'yes';
}