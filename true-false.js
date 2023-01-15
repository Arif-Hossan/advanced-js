/*
js will return false ,for number if it's find 0 and for string if it's empty
even the number is negative and a string continue with a white space it will return true...awesome
hei, this three dot are not any destructing practice , i put it there just randomly..
if any variable value is undefined/null/NaN js will take it as false

***important***
Truthy ===='0',' '(white space within a blockquote),empty array, empty object,true,'false'
falsy=NaN,Undefined,null,when value is 0, when string is empty(''),false,

*/
let age = "0"; //return true
// let name=NaN;//return false
// let name=null;//return false
// let name;//return false because name is undefined
// const name= " "//return true
// const name= ""//return false
// const name="John Doe"//return true
// const age =4;//return true
// const age=-1;//return true
// const age = 0;//return false
if (age) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}
