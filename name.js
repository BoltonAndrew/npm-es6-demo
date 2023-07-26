// const default = {}; Ever file starts wth an empty object called default

const personName = "Brandon";

export const pet = {
  name: "Cheddar",
  species: "cat",
  age: 5,
  color: "orange",
};

export function greet(name) {
  return `Hello from name.js, my name is ${name}!`;
}

export default personName;
