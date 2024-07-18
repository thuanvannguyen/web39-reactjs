import { add, ax } from "./math.js";
import helloX from "./control.js";
console.log("add: ", add(1, 2));

helloX();
console.log("ax", ax);

// 1. let and const
let age = 25;
age = 30;

console.log(age);

const email = "web39@gmail.com";
// email = "abc@gmail.com";
// console.log(email);//Error


// 2. "this" trong arrow function

const person = {
  first: "Web",
  last: "39",
  // fullName: "web39"
  fullName: function () {
    return this.first + this.last;
  }
}

console.log(person.fullName());


const person_1 = {
  first: "Web",
  last: "39",
  // fullName: "web39"
  fullName: () => {
    return this.first + this.last;
  }
}

// console.log(person_1.fullName());

// 3. Destructuring array

const array = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = array;
console.log(a);
console.log(array[0]);


const user = {
  name_user: "nguyen van a",
  age_user: 20,
  email_user: "a@gmail.com"
};

const { name_user, age_user, email_user } = user;

console.log(age_user);
console.log(user.age_user);

// 4. Default Parameters

const hello = (name = "web39") => {
  // console.log(name);
  console.log("hello 500 anh em lop " + name);
}

hello("web9999");

// 5. Rest Pramesters

const print_array = (...numbers) => {

  // console.log(numbers);
  let total = 0;

  numbers.forEach((value, index) => {
    return total += value;
  })

  return total;
}

// print_array(1, 2 , 3, 4);
console.log(print_array(1, 2, 3, 100));


// Spread Operator
const arr_2 = [1, 2, 3, 4, 5];

// -> rest parameters 
const [x, y, ...numberArr] = arr_2;

// const [...numberArr, x, y] = arr_2;

console.log(x);
console.log(numberArr);

