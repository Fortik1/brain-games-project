#!/usr/bin/env node
import {randomNumber} from "../src/index.js";
import {userName} from "../src/cli.js";
import readlineSync from "readline-sync";

var name = userName();

console.log(`Hello, ${name}!`);
console.log(`What is the result of the expression?`);

for (var i = 0; i < 3; i++) {
    var znak = randomNumber(2),
    otvet = 0,
    numberOne = randomNumber(),
    numberTwo = randomNumber();

    if (znak === 0) {
        console.log(`Question: ${numberOne} + ${numberTwo}`);
        otvet = numberOne + numberTwo;
    } else if (znak === 1) {
        console.log(`Question: ${numberOne} - ${numberTwo}`);
        otvet = numberOne - numberTwo;
    } else {
        console.log(`Question: ${numberOne} * ${numberTwo}`);
        otvet = numberOne * numberTwo;
    }

    var otvetUser = readlineSync.question(`Your answer: `);
    
    if (Number(otvetUser) === otvet) {
        console.log(`Correct!`);
    } else {
        console.log(`'${otvetUser}' is wrong answer ;(. Correct answer was '${otvet}' \nLet's try again, ${name}!`);
        break;
    }

    if (i === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}