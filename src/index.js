export function randomNumber(max = 30) {
    return Math.floor(Math.random() * max);
}

export function NOD (x, y) {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
}