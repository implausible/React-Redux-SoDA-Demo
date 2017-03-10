console.log('[ Objects ]\n');

const someImportantThing = "I'm not arbitrary. I swear!";

const aJavaScriptObject = {
  key: 'value',
  number: 1,
  anotherObject: {
    withKey: 'oh my!'
  },
  someKey: someImportantThing
};

console.log(' -- Basic object read --');
console.log('Our object:', aJavaScriptObject);
console.log();

// shorthand we'll be using
const shorthandAssignment = { someImportantThing };

console.log(' -- Shorthand assignment --');
console.log('Our object:', shorthandAssignment);
console.log();
