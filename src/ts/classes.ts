





class Vehicle {
    color: string = 'red'; // variable initialization

    constructor(color: string) { // __init__
        this.color = color;
    }

    drive(): void {
        console.log("Hello Vehicle")
    }

    honk(): void {
        console.log('beep');
    }

    // Can access externally
    protected fly(): void {
        console.log("Fly Car")
    }
}


const vehicle = new Vehicle("red");
console.log(vehicle.drive());
console.log(vehicle.honk());



class Car extends Vehicle {
    // Public can be called after initialization externally
    public drive(): void {
        console.log("Hello Car")
    }

    // only used in this class
    private park(): void {
        console.log("Park Car");
        this.fly();
    }

    // only used in this class
    parking(): void {
        console.log("Park Car");
        this.fly(); // Able to access protected only by inherited classes
    }
}

const car = new Car("yellow");
car.drive();
car.honk();
// console.log(car.park()); // Error! can't access private methods
// console.log(car.fly()); // Error! can't access protected methods

car.parking();




// class Vehicle1 {
//     color: string = 'red'; // variable initialization
//
//     constructor(color: string) { // __init__
//         this.color = color;
//     }
// }

// Identical to above
class VehiclePublicColor {
    constructor(public color: string) {}
}
// Identical to above
class VehiclePrivateColor{
    constructor(private color: string) {}
}
// Identical to above
class VehicleProtectedColor {
    constructor(protected color: string) {}
}



// Identical to above
class MyCar extends Vehicle{
    constructor(public color: string) {
        super(color)
    }
}

const mycar = new MyCar("green");









