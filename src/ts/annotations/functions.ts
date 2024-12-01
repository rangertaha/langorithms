
//
import compileStreaming = WebAssembly.compileStreaming;

const add =  (a: number, b: number): number  => {
    return a + b
};



const subtract =  (a: number, b: number)  => {
    return a - b
};


function divide(a: number, b: number): number {
    return a / b
}

const multiply = function(a: number, b: number): number {
    return a * b;
};



// functions that return nothing are annotated to return a "void"
const logger = (msg: string): void => {
    console.log(msg);
};


// functions that return nothing are annotated to return a "void"
const throwError = (msg: string): void => {
    if (!msg) {
        throw new Error(msg);
    }
};



const forecast = {date: new Date(), weather: 'sunny'};

const logWeather1 = (forecast: {date: Date, weather: string}): void =>{
    console.log(forecast.date);
    console.log(forecast.weather);
};


//ES2019 destructuring
const logWeather2 = ({date, weather}: {date: Date, weather: string}): void =>{
    console.log(forecast.date);
    console.log(forecast.weather);
};


logWeather1(forecast);
logWeather2(forecast);

console.log(add(2, 5));
console.log(subtract(2, 5));

