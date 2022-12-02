#!/usr/bin/env node
import {NOD, randomNumber, neydacha, Congratulations} from "../../src/index.js";
import {userName} from "../../src/cli.js";
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

    var result = neydacha(otvet, otvetUser, name);

    if (result === 1) {
        break;
    }

    Congratulations(name, i);
} 