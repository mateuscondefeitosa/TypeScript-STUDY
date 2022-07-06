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

// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     console.log("WOO!!!");
//     printUser(res.data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// axios
//   .get<User[]>("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     console.log("WOO!!!");
//     res.data.forEach(printUser);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// function printUser(user: User) {
//   console.log(user.name);
//   console.log(user.email);
//   console.log(user.phone);
// }


interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
}

import axios from "axios";
import _ from "lodash";

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


axios.get<User[]>("https://jsonplaceholder.typicode.com/users/")
  .then((res) => {
    console.log("DEU");
    res.data.forEach(printUser)
  }).catch((e) => {
    console.log("ERRO", e);
  });

function printUser(user: User): void {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}



// lodash
