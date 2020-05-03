



const drink = {
    color: 'brown',
    corbonated: true,
    sugar: 40
};

// example of a tuple, order of types
const pepsi: [string, boolean, number] = ['brown', true, 40];

pepsi[0] = 'yello';





type Drink = [string, boolean, number];


const coke: Drink = ['brown', true, 30];
const sprite: Drink = ['clean', true, 20];


console.log(coke);
console.log(sprite);





// Its hard to understand what this is
const carSpecs: [number, number] = [200, 100];

// Easier to read
const carStats = {
    hosepower: 200,
    weight: 2999
};










