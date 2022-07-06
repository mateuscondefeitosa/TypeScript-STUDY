"use strict";
// import axios from "axios";
// import _ from "lodash";
// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// axios.get<User>("https://jsonplaceholder.typicode.com/users/")
//   .then((res) => {
//     console.log("DEU");
//     printUser(res.data);
//   }).catch((e) => {
//     console.log("ERRO", e);
//   });
// function printUser(user: User): void {
//   console.log(user.name);
//   console.log(user.email);
//   console.log(user.phone);
// }
axios_1.default.get("https://jsonplaceholder.typicode.com/users/")
    .then((res) => {
    console.log("DEU");
    res.data.forEach(printUser);
}).catch((e) => {
    console.log("ERRO", e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
// lodash
