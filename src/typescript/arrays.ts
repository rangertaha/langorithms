

const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();


// Prevent incompatible values
//carMakers.push(100);


// Help with map
const upperCarMakers = carMakers.map((car: string): string => {
    return car.toUpperCase();
});

console.log(carMakers, upperCarMakers);


// Flexible types
const importantDates: (Date | string )[]  = [new Date()];
importantDates.push('2020-01-01');
importantDates.push(new Date());
console.log(importantDates);



