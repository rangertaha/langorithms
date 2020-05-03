


// Creates new type, describing the property names an values types of an object.



// This is kinda long

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
};

const printVehicle = (vehicle: {name: string, year: number, broken: boolean})=>{
    console.log(`Name ${vehicle.name}`);
    console.log(`Year ${vehicle.year}`);
    console.log(`Broken ${vehicle.broken}`);
};

printVehicle(oldCivic);


// Solution


interface Vehicle {
    summary(): string;
}

const oldHonda = {
    name: 'honda',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
};

const oldToyota = {
    name: 'toyota',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
};


const drink = {
    name: 'coke',
    summary(): string {
        return `Name: ${this.name}`
    }
};


const echoVehicleSummary = (vehicle: Vehicle)=>{
    console.log(vehicle.summary());
};


console.log('Using interfaces');
echoVehicleSummary(oldHonda);
echoVehicleSummary(oldToyota);
echoVehicleSummary(drink);







