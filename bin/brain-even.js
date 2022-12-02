#!/usr/bin/env node
import {userName} from "../src/cli.js";
import {Congratulations, neydacha} from "../src/index.js";
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

var result = neydacha(yesOrNo, otvet, name);

if (result === 1) {
    break;
}

Congratulations(name, i);

}