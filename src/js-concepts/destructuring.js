console.log('[ Destructuring objects ]\n');

const anObject = {
  a: 1,
  b: 2,
  c: 3
};

const { a, b, c } = anObject;

console.log(' -- Values after destructuring from object -- ');
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);
console.log();

const obj1 = {
  a: 'Hello',
  b: 'World!'
};

const obj2 = {
  a: 'Goodbye'
};

const spreadStartingWithObj1 = {
  ...obj1,
  ...obj2
};

const spreadStartingWithObj2 = {
  ...obj2,
  ...obj1
};

console.log(' -- Spread operator -- ');
console.log('Merging objects 1 -> 2:', spreadStartingWithObj1);
console.log('Merging objects 2 -> 1:', spreadStartingWithObj2)
console.log();
