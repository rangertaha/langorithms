

// Arrays
let apples: string[] = ['a', 'b', 'c', 'd'];
let appleCount: number[] = [1,2,3,4];
let appleHealth: boolean[] = [true, true, false, false];


// Classes
/**
Classes are title case
variables are lowercase

*/


class Car {}
let car: Car = new Car();

// object literal
let point: {x: number; y: number} = {x: 10, y: 20};



// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};


// Always use type inference except in these cases.
// 1. When a function returns 'any'
// 2. When we declare a variable on one line then initialize it later
// 3. When we want a variable to have a type that can't be inferred


//   When a function returns 'any

const json = '{"x": 10, "y": 20}';

// Defaults to 'any' type
// const position = JSON.parse(json);


// Avoid using any at all costs

const position: {x: number, y: number} = JSON.parse(json);

console.log(position);

// When we declare a variable on one line then initialize it later

let words = ['red', 'green', 'blue']; // infered
let foundWord: boolean; // annotation required

for (let i=0; words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}




// When we want a variable to have a type that can't be inferred
