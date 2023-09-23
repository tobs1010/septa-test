// Difference between Var, Let and Const
// var declarations are globally scoped or function scoped
// var variables can be updated and re-declared within its scope;  const variables can neither be updated nor re-declared.
// var variables are initialized with undefined, let and const variables are not initialized.
// var variables can be declared without being initialized.

// let variables are block scoped.
// let variables can be updated but not re-declared;
// let variables can also be declared without being initialized


// const variables are block scoped
// const variables can neither be updated nor re-declared
// const variables must be initialized during declaration

// JAVASCRPIT DATA TYPES
// Undefined: undefined is when a value is not assigned. If a variable is declared, but not assigned, then its value is undefined:
// null: It’s just a special value which represents “nothing”, “empty” or “value unknown”.
// Symbols: A Symbol is a unique and immutable primitive value.The symbol type is used to create unique identifiers for objects.
// Objects: Object is a value in memory which is possibly referenced by an identifier.Objects are the only mutable values.

// params or placeholder

let usersAge = prompt("Please enter your age");
console.log (usersAge)
let citizenship = prompt("Are you a citizen?");
console.log (citizenship)

if (usersAge >= 18 && citizenship == "yes") {
    alert ("You are eligible to vote");
} else if (usersAge < 18 && citizenship == "yes"){
    alert("citizenship valid, Age invalid")
} else {
    alert ("Ineligible to vote");
}






















// function addition(x){         
//     console.log(2 + x);
// }

//  addition(5)            



// function greet(name){
//     console.log (name);
// }

//  greet("gabriel")   


// let sum1 = 2 + 2
// let sum2 = 3 + 2
// let sum3 = 4 + 2
// let sum4 = 5 + 2

// function country(Country,abbreviation){
//     console.log (Country + " " + abbreviation);
// }

// country("Nigeria","Nig")
// country("Ghana","Gha")
// country("Russia","Rus")
// country("Germany","Ger")

// function sum(a,b){
//     console.log(a + "+" + b + "=" + (a+b))
// }
// sum(2,1)
// sum(6,7)


// function sub(a,b){
//     console.log(a + "-" + b + "=" + (a-b))
// }
// sub(10,5)
// sub(20,7)


// function multiply(a,b){
// console.log(a + "x" + b + "=" + (a*b))
// }

// multiply(7,7)
// multiply(6,3)



// function addition(x,y){         
//     console.log(x + y);
// }

//  addition(3,8) 






// // object is a collection of properties
// // properties can be key and a value


// let name1 = "Tayo"

// let person = {
//     name: "toyin",
//     old: "15",
//     address: {
//         streetname: "kayode street"
//     }
// }
// console.log(person.address)
// console.log(person.name)


// // object
// let car ={
//     color: "pink",
//     brand: "Toyota",
//     platenumber: 257825372,
//     model:"corolla",
//     tyrecolor: "Black",
//     year: 2010,
//     drive: function(){
//         console.log("I'm driving");  //medium
//     }
// }
// let Tobi = {
//     skincolor: "Caramel",
//     height: "6ft",
//     size: "medium",
// }
// console.log(Tobi.skincolor)

// console.log("size", Tobi)

// person.size = "small"

// console.log("size", Tobi)

// // array holds more than one value, similar data types

// let cars = ["toyota","benz","lexus","honda"]

// console.log(cars);
// console.log(cars[2])

// cars[2] = "porshe"

// console.log(cars)


// let kitchen = ["blender","cooker","microwave","toaster"]
// console.log(kitchen);
// console.log(kitchen[1])

// kitchen[1] = "fridge"
// console.log(kitchen)

// let human = [{
//     gender: "female",
//     agebracket: "15-20",
//     school: "queens college",
//     address:{
//         street:"adekunle street",
//         city: "lagos"
//     }
// },{
// gender: "male",
// agebracket: "15-20",
// school: "queens college",
// address:{
//     street:"adekunle street",
//     city: "lagos"
// }
// },
// "Adebayo"
// ]

// // access both genders
// // change city to ogun
// // change adebayo to your name



// console.log(human[0].gender)
// console.log(human[1].gender)
// human[0].city = "ogun"
// console.log(human[0].city)
// human[1].city = "ogun"
// console.log(human[1].city)


// // conditional statements
// //  if (condition){
//     // code to be executed if the condition is true
//     // }

// // >,<,<=,>=,==,===,!
// // > =greater than
// // < = less than
// // >= = greater than or equals to
// // <= = less than or equals too
// // == = double equals to (equals to)
// // === = triple equals to(strict equals to)
// // ! = not equals to
// //  || = or
// //  && = and

// let age = 18
// if (age > 18){
// console.log("yes age is greater");
// } else if ( age>= 18){
//     console.log ("yes age");
// }else{
//     console("no condition")
// }
//     console.log("this condition is false")

// let rainfall = true
// let sunshine = false

// if (rainfall){
//     console.log ("yes rain fall")
// } else {
//     console.log("no rain didnt fall")
// }

// let dogbark =true
// let lionroar = false

// if(!dogbark){
//     console.log("aaa")
// } else if (!!dogbark){
//     console.log("cccc")
// }
// else if (!lionroar){
//     console.log("bbbb")
// }
// else{
//     console.log("no")
// }
// // true || false =true 
// // true || true = true
// // false || false = false

// //  true && false = false
// //  true && true= true
// //  false && false = false










// alert("hello world");
// document.write("Hello septa people")
// // variables used to store data
// var school = "unilag"
// console.log("hi guys,its cool to be learning js");
// const website ="google"
// const url ="https://www." + website + ".com"
// console.log(url)

// // const name1 = "Oluwatobi"
// const loc = "Lagos"
// const University = "Unilorin"

// console.log(" My name is " + name1 + ","+ " I live at " + loc +" I Schooled in " + University )
