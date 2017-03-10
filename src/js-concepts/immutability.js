console.log('[ Immutability ]\n');

const test = 1;
// test = 2;

const obj1 = {
  a: 1,
  b: 2
};

const obj2 = {
  a: 1,
  b: 2
};

console.log(' -- Referential Equality -- ');
console.log('obj1:', obj1);
console.log('obj2:', obj2);
console.log('obj1 === obj1:', obj1 === obj1);
console.log('obj2 === obj2:', obj2 === obj2);
console.log('obj1 !== obj2:', obj1 !== obj2);
console.log();


console.log(' -- Mutating an object -- ');
console.log('Before updating key:', obj1);
obj1.key = 'new value';
console.log('After updating key:', obj1);
console.log('obj1 === obj1:', obj1 === obj1);
console.log();


console.log(' -- Updating without mutating -- ');
const obj3 = {
  ...obj2,
  a: 3
};
console.log('obj2:', obj2);
console.log('obj3:', obj3);
console.log('obj2 === obj2:', obj2 === obj2);
console.log('obj2 !== obj3:', obj2 !== obj3);
