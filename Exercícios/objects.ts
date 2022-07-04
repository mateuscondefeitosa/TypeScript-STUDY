// // Objects as parameters:
// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: "Thomas", last: "Jenkins" });

// const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
// printName(singer);

// // let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// // function randomCoordinate(): { x: number; y: number } {
// //   return { x: Math.random(), y: Math.random() };
// // }

// // function doublePoint(point: { x: number; y: number }): {
// //   x: number;
// //   y: number;
// // } {
// //   return { x: point.x * 2, y: point.y * 2 };
// // }

// // type Point = {
// //   x: number;
// //   y: number;
// // };

// let coordinate: Point = { x: 34, y: 2 };

// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: Point): Point {
//   return { x: point.x * 2, y: point.y * 2 };
// }

// type Song = {
//   title: string;
//   artist: string;
//   numStreams: number;
//   credits: { producer: string; writer: string };
// };

// function calculatePayout(song: Song): number {
//   return song.numStreams * 0.0033;
// }

// function printSong(song: Song): void {
//   console.log(`${song.title} - ${song.artist}`);
// }

// const mySong: Song = {
//   title: "Unchained Melody",
//   artist: "Righteous Brothers",
//   numStreams: 12873321,
//   credits: {
//     producer: "Phil Spector",
//     writer: "Alex North",
//   },
// };

// const earnings = calculatePayout(mySong);
// console.log(earnings);
// printSong(mySong);

// type Point = {
//   x: number;
//   y: number;
//   z?: number;
// };

// const myPoint: Point = { x: 1, y: 3 };

// type User = {
//   readonly id: number;
//   username: string;
// };

// const user: User = {
//   id: 12837,
//   username: "catgurl",
// };

// console.log(user.id);
// user.id;

// type Circle = {
//   radius: number;
// };

// type Colorful = {
//   color: string;
// };

// type ColorfulCircle = Circle & Colorful;

// const happyFace: ColorfulCircle = {
//   radius: 4,
//   color: "yellow",
// };

// type Cat = {
//   numLives: number;
// };
// type Dog = {
//   breed: string;
// };

// type CatDog = Cat &
//   Dog & {
//     age: number;
//   };

// const christy: CatDog = {
//   numLives: 7,
//   breed: "Husky",
//   age: 9,
// };



//Ex1:
type Movie = {
  title: string,
  originalTitle?: string,
  director: string,
  releaseYear: number,
  boxOffice: {
    budget: number,
    grossUS: number,
    grossWorldwide: number,
  },
};


const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
}


const getProfit = (movie: Movie): number => {
  return (movie.boxOffice.grossWorldwide - movie.boxOffice.budget)
}

const conta = getProfit(cats);
console.log(conta)