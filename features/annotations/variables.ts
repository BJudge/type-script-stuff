let apples: number = 5;
let speed: string = "fast";

//array
let colours: string[] = ["blue", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4, 5];

//classes

class Cars {}

let car: Cars = new Cars();

// object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") foundWord = true;
}

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
