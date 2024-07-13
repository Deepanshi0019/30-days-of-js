// Task 1-:  Variable Declaration

//1 
var num = 19;
console.log(num);  // ==> 19

// 2
let name = "Deepanshi"
console.log(name); // ==> Deepanshi

// Task 2 -:  Constant Declaration
// 3
const boolen = true;
console.log(boolen); // true

// Task 3 -: Data Types
let bla = 15;
console.log(typeof(bla)); // number

let words = "Deepanshi Yadav"
console.log(typeof(words)); // string

let truefalse = false;
console.log(typeof(truefalse)); // boolean

let id = {
    name: "chota done",
    kaam: "chota kaam",
    rank : 500
}
console.log(typeof(id)); // object

let favcharacter = ["naruto", "tobi", "shikamaru", "rocklee","zinitsu"]
console.log(typeof(favcharacter)); // object


// task -: Reassigning Variables

let assigne = "day 1 of js started";
console.log(assigne); // day 1 of js started
 assigne = "and I am enjoying it"
console.log(assigne);  // and I am enjoying it

const chek = "day 1 of js started";
console.log(assigne);

 chek = "and I am enjoying it"
console.log(assigne);  // typeError