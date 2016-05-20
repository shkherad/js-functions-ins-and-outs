'use strict'
let count = 0; //everyone shares counter

const counterFactory = function() {

  return function counter () {
    return count +=1;
  };
}




// const isCentimeters = function (value) {
//   if (value > 100 ){
//   return true
// } else {
//   return false
// }
// };
//
// const from CmToIn = function (value) {
//   return value * 0.39
// };




//functions that take callbacks
//value: thing want to transform
//predicate: test or function/value that returns boolean
//mutator: function that does the conversion



// const arrayPredicate = function (member) {
//   if (member >=3){
//     return true
//   } else {
//     return false
//   }
// };
//
// const arrayTransform = function arrayTransform(values,predicate,mutator) {
//   let result = [];
//   for (let i = 0; i < values.length; i++){
//     let value = values[i]
//     if (predicate(value)) {
//       result.push(mutator(value))
//     }
//   }
//   return result
// };
//
//
// const transform = function transform(value,predicate,mutator) {
// if (predicate(value)) {
//   return mutator(value)
// }
// };
//
//
//
//
//
//
//
// const max = function () {
//   //takes arbitrary number of arguments
//   //each arg should be a nummber
//   //finds the largest number and returns
//
//   let result = arguments[0];
//   for (let i = 1; i < arguments[0].length; i++){
//     if (result < arguments[0][i]){
//       result = arguments[0][i]
//     }
//   }
//   return result;
// };
//
//
// const product = function(){
//   let result = 1
//   for (let i = 0;i<arguments.length; i++){
//     result = result * arguments[i]
//   }
//   return result
// }
//
// const addProperty = function addProperty(obj,prop,val) {
//   //this function takes an object and adds a property to it
//   // let prop = arguments[1];
//   // let val = arguments[2];
//   // let result = arguments[0];
//
//   obj[prop] = val;
//   return obj
// }
//
// let shireen = {
//   name: "Shireen",
//   age: 23,
//   address: "260 Brookline Street"
// }
