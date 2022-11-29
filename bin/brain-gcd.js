#!/usr/bin/env node
import {NOD, randomNumber} from "../src/index.js";
import {userName} from "../src/cli.js";
import readlineSync from "readline-sync";

var name = userName();

console.log(`Hello, ${name}!`);
console.log(`Find the greatest common divisor of given numbers.`);

for (var i = 0; i < 3; i++) {
    var numberOne = randomNumber(100) + 1,
    numberTwo = randomNumber(100) + 1,
    otvet = NOD(numberOne, numberTwo);
    
    console.log(`Question: ${numberOne} ${numberTwo}`);
    var otvetUser = readlineSync.question(`Your answer: `);

    if (Number(otvetUser) === otvet) {
        console.log(`Correct!`);
    } else {
        console.log(`'${otvetUser}' if wrong answer  ;(. Correct answer was '${otvet}'. \nLet's try again, ${name}!`);
        break;
    }

    if (i === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}