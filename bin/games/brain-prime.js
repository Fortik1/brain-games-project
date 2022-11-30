#!/usr/bin/env node
import {userName} from "../../src/cli.js";
import { neydacha, Congratulations, primeNumber} from "../../src/index.js";
import readlineSync from "readline-sync";

var name = userName();

console.log(`Hello, ${name}!`);
console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);

for (var i = 0; i < 3; i++) {
    var otvet = primeNumber(),
    otvetUser = readlineSync.question("Your answer: "),
    res = neydacha(otvet, otvetUser, name);
    if (res === 1) break;
    Congratulations(name, i);
}
