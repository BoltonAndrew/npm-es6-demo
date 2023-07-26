import personName, { pet, greet } from "./name.js";
import _ from "lodash";

console.log(personName);
console.log(pet.name, pet.age);
let result = greet("Andy");
console.log(result);
console.log(greet("Achraf"));

const nums = _.range(1, 9);
console.log(nums);
