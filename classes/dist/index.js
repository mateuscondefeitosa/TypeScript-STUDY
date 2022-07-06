"use strict";
// class Player {
//   readonly first: string;
//   readonly last: string;
//   score: number = 0;
//   private privado: boolean = true;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
// }
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        //   readonly first: string;
        //   readonly last: string;
        this._score = 0;
        this._privado = true;
    }
    secretMethod() {
        console.log("SECRET METHOD!!!!!!!");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get privado() {
        return this._privado;
    }
    set privado(newPrivated) {
        this._privado = newPrivated;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999;
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log("Print.");
    }
}
const bike1 = new Bike("pink");
const jacket1 = new Jacket("Prada", "black");
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
