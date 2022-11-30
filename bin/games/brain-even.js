#!/usr/bin/env node
import {userName} from "../../src/cli.js";
import readlineSync from 'readline-sync';

var name = userName();

console.log(`Hello, ${name}!`);
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

for (var i = 0; i < 3; i++) {
var random = Math.floor(Math.random() * 21),
otvet = '',
yesOrNo = '';

console.log(`Question: ${random}`);
otvet = readlineSync.question(`Your answer: `);
yesOrNo = random % 2 === 0 ? 'yes' : 'no';

if (yesOrNo === otvet) {
    console.log('Correct!');
} else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${name}`);
    break;
}

if (i === 2) {
    console.log(`Congratulations, ${name}!`);
}

}