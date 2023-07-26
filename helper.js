export function addNumToPass(pass) {
  let ranNum = Math.random() * 100;
  return `${pass}${ranNum}`;
}

export function sum(...nums) {
  let result = 0;
  for (let num of nums) {
    result += num;
  }
}
