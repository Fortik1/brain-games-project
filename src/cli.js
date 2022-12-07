import readlineSync from 'readline-sync';

export default function userName() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return name;
}
