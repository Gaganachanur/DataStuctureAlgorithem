/*Hoisting is the default nature of JavaScript in which declarations of the variables go on the top.
 That means if we are using a variable on the top of our code but it is declared on the bottom,
 then the JS engine will not give any error. For example*/

console.log(a); 
//some code 
//some code 
//some code 
var a = 1;

/*Here output of the code will be “undefined”. 
That means it will not show any error because the declaration of variable “a” went on the top.
 One most important thing to remember is that let and const don't support the hoisting. 
Only variables declared with keyword var support hoisting. */

/*What is a Temporal Dead Zone?
This question is also related to the hoisting and scope of variables. It is related to let and const. 
If we want to initialize a variable but it is not declared yet, and it is declared in the code below. 
Then it will give a reference error and that is called temporal dead zone. 
In this zone the variable is dead temporary. For example:*/
//  r = 4;
// some code|
// somecode|     temporal dead zone
// somecode|
// let r;
// console.log(r +'r')

/*In the above code, the zone between variable initialization and declaration is called Temporal Dead Zone. */

// const x = []; //empty array assigned to static variable a 
// const y = []; //empty array assigned to static variable b 
// console.log(x === y); 
// console.log(x == y);

// console.log(1=='1')//true because compares value
// console.log(1=== '1') //false because compare value and data type also

/*This is because the memory allocation to both of the empty arrays (x and y) is different. 
In the case of an array JavaScript doesn’t match the values, but it matches the references (memory locations). 
This is the reason why output is false in both cases. */


let g = 10; 
function u() { let g = 20; v(); } 
function v() { console.log(g); } 
u();
  
