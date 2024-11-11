/* 
1. What are the possible way to create objects in javascript.
Ans => There are many way to create objects in javascript as mentioned below:
 i. Object literal syntax:

 const object = {
   name: "Bhavya",
   age: 23,
 };
 Object literal property values can be of any datatype, including array, function and nested objects.

 Note: This is one of the easiest way to create an object.

 ii. Object constructor

 The simple way to create an empty object is using object cobstructor . currently this approach is not recommended.
 const object = new Object();
 
 The object() is a built-in constructor function so "new" is not required. the above code snippet can be re-written as :
 var object = Object();
 console.log(object);
 iii. Object's create method 
 The create method od object is used to create a new object by passing the specified prototypr object and properties as argument, i.e., this pattern is helpful to create new objects based on existing  


var object = Object.create(null);

let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};

let carProps = {
  type: {
    value: "Volkswagen",
  },
  model: {
    value: "Golf",
  },
};

var car = Object.create(vehicle, carProps);
console.log(car.wheels);

iv. functional constructor:
function Person(name) {
  this.name = name;
  this.age = 21;
}

var object = new Person("Bhavya");
console.log(object);
 v. Function constructor with prototype:


function Person() {}
Person.prototype.name = "Bhavya";
var object = new Person();
console.log(object.name);

vi. Object's assign method:

const orgObject = { company: "XYZ Corp" };
const carObject = { name: "Toyota" };
const staff = Object.assign({}, orgObject, carObject);
console.log(staff);

vii. ES6 class Syntax:
class Person {
  constructor(name) {
    this.name = name;
  }
}
var object = new Person("Bhavya");
console.log(object);

viii. Sinleton Pattern

var object = new (function () {
  this.name = "Bhavya";
})();

console.log(object);

ques 2: What is prototype chain.

ques 3: what is difference between call apply and bind
// call
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(`${greeting1} ${this.firstName} ${this.lastName}, ${greeting2}`);
}

invite.call(employee1, "Hello", "How are you?");
invite.call(employee2, "Hello", "How are you?");

//apply
invite.apply(employee1, ["Hello", "How are you?"]);
invite.apply(employee2, ["Hello", "How are you?"]);

// bind
var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);

inviteEmployee1("Hello", "How are you?");
inviteEmployee2("Hello", "How are you?");

ques 4: what is JSON and its common operation

ques 5: What is the purpose of the array slice method


let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2);
let arrayIntegers2 = arrayIntegers.slice(2, 3);
let arrayIntegers3 = arrayIntegers.slice(4);
let arrayIntegers4 = arrayIntegers.slice(-3, -1);
console.log(arrayIntegers4);
*/
