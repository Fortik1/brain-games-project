#!/usr/bin/env node
import {randomNumber, neydacha, Congratulations, createArray} from "../src/index.js";
import {userName} from "../src/cli.js";
import readlineSync from "readline-sync";

var name = userName();

console.log(`Hello, ${name}!`);
console.log(`What number is missing in the progression?`);

for (var i = 0; i < 3; i++) {
    var numberDis = randomNumber(6) + 1,
    numberStart = randomNumber(),
    arrayLen = randomNumber(5) + 5,
    otvet = createArray(numberDis, numberStart, arrayLen),
    otvetUser = readlineSync.question(`Your answer: `);
    
    var result = neydacha(otvet, otvetUser, name);
    
    if (result === 1) {
        break;
    }
    
    Congratulations(name, i);
    
}

