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
//   readonly first: string;
//   readonly last: string;
  protected _score: number = 0;
  private _privado: boolean = true;

  constructor(
    public first: string,
    public last: string
    ) {}

  private secretMethod(): void {
    console.log("SECRET METHOD!!!!!!!");
  }

  get fullName(): string { // GET = READONLY SEMPRE
    return `${this.first} ${this.last}`
  }

  get privado(): boolean {
    return this._privado;
  }

  set privado(newPrivated: boolean) {
    this._privado = newPrivated;
  }
}


class SuperPlayer extends Player {
    isAdmin: boolean = true;
    maxScore(){
        this._score = 999999;
    }
}


////////////////////////////////////////


interface Colorful {
    color: string;
}

interface Printable {
    print(): void,
}

class Bike implements Colorful {
    constructor (public color: string) {}
}

class Jacket implements Colorful, Printable {
    constructor (public brand: string, public color: string) {}

    print() {
        console.log("Print.");
    }
}

const bike1 = new Bike("pink");

const jacket1 = new Jacket("Prada" , "black");



abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string,private salary: number) {
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }  
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string,private hourlyRate: number, private hoursWorked: number) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}