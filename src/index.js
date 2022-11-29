export function randomNumber(max = 30) {
    return Math.floor(Math.random() * max);
}

export function NOD (x, y) {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
}

export function neydacha(otvet, otvetUser, name) {
    if (Number(otvetUser) === otvet) {
        console.log(`Correct!`);
    } else {
        console.log(`'${otvetUser}' if wrong answer  ;(. Correct answer was '${otvet}'. \nLet's try again, ${name}!`);
        return 1;
    }
}