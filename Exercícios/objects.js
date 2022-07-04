// // Objects as parameters:
// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }
var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789
    }
};
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348
    }
};
var getProfit = function (movie) {
    return (movie.boxOffice.grossWorldwide - movie.boxOffice.budget);
};
var conta = getProfit(cats);
console.log(conta);
