  console.log('Howdy HEP');

// this is a one-line comment (same as # in Python)
/* this is a block comment. lots of lines */
var someNumber = 91;
console.log(someNumber + '5');
var someArray = ['hep', 80, ['hep', 'hep', 'hep']];
console.log(someArray[2]); // index what you want to print to console.log
//////// change name to make the above div behave
var someObject = {'name': 'Elaine', age: 54};
var nameElement = document.getElementById('name');
nameElement.innerText = someObject.name; ///['name'];/either is ok//
//////////
console.log(someObject['age']);  // see how quotes function on keys

if (someNumber === 90) {
  console.log('My number is 90!');
} else if (someNumber === 91) {
  console.log('goat');
} else {
  console.log("My number ain't no 90");
}

for (var i = 0; i < someArray.length; i++) {
  console.log(i);
  console.log(someArray[i]);
}
/* while (true) {
  console.log('TRUE!!!');
} CAREFUL HERE!!!! */
