console.log('[ Functions ]\n');

// Classic JavaScript function
function aJavaScriptFunction() {
  return 1 + 1;
}

console.log(' -- Classic function -- ');
console.log('Return value:', aJavaScriptFunction());
console.log();

// Classic anonymous functions in JavaScript
var anAnonymousFunction = function() {
  return "I don't have a name.";
};

console.log(' -- Classic anonymous function -- ');
console.log('Return value:', anAnonymousFunction());
console.log();

// New ES6 arrow functions
const anArrowFunction = () => {
  return (Math.random() * 100) + 1;
}

console.log(' -- Arrow function -- ');
console.log('Return value:', anArrowFunction());
console.log();


// Short hand return from an arrow function
const arrowWithShorthandReturn = () => 'If we omit {}, this must be an expression.';

console.log(' -- Arrow function with shorthand return -- ');
console.log('Return value:', arrowWithShorthandReturn());
console.log();
