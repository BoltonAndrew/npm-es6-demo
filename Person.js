class Person {
  constructor(config) {
    this.name = config.name;
    this.age = config.age;
  }
  getName() {
    return `My name is ${this.name}`;
  }
}

export default Person;
