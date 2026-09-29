
import readline from 'node:readline/promises';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi", "Porsche"];


const entree = await rl.question("Donnes moi un mot: ");
const voiture = await rl.question("Donnes moi un numéro de 1 à 10: ");
rl.close();
let car = cars[voiture - 1];
const crier = (mot) => mot.toUpperCase() + "!";

console.log(crier(entree));
console.log(car);