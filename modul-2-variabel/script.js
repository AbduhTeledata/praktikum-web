// Ways to declare a variable
// `var`, `let`, & `const`

let firstName = 'John';
const lastName = 'Doe';
let age = 30;

console.log(age);


age = 31;
console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
  name: 'Brad',
};
person.name = 'John';
person.email = 'brad@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);

function jumlah()
{
    var bil1 = parseFloat(document.fform.bilangan1.value); 
    if (isNaN (bil1))
        bil1=0.0;
    var bil2 = parseFloat(document.fform.bilangan2.value); 
    if (isNaN (bil2))
        bil2=0.0;
    var hasil = bil1 + bil2;
    alert ("Hasil Penjumlahan = " + hasil);
}

