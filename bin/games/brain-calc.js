#!/usr/bin/env node
import {randomNumber, neydacha, Congratulations} from "../../src/index.js";
import {userName} from "../../src/cli.js";
import readlineSync from "readline-sync";

var name = userName();

console.log(`Hello, ${name}!`);
console.log(`What is the result of the expression?`);

for (var i = 0; i < 3; i++) {
    var znak = randomNumber(3),
    otvet = 0,
    numberOne = randomNumber(),
    numberTwo = randomNumber();

    if (znak === 0) {
        console.log(`Question: ${numberOne} + ${numberTwo}`);
        otvet = numberOne + numberTwo;
    } else if (znak === 1) {
        console.log(`Question: ${numberOne} - ${numberTwo}`);
        otvet = numberOne - numberTwo;
    } else if (znak === 2) {
        console.log(`Question: ${numberOne} * ${numberTwo}`);
        otvet = numberOne * numberTwo;
    }

    var otvetUser = readlineSync.question(`Your answer: `);
    
    var result = neydacha(otvet, otvetUser, name);

    if (result === 1) {
        break;
    }

    Congratulations(name, i);
}