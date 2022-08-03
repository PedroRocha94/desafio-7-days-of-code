//Show the correct message about the value and types of variables;

let numberOne = 1;
let stringOne = '1';
let numberThirty = 30;
let stringThirty = '30';
let numberTen = 10;
let stringTen = '10';

if (numberOne == stringOne) {
  console.log('The variables numberOne and stringOne have the same value but different types');
} else {
  console.log('The variables numberOne and stringOne do not have the same value');
}

if (numberThirty === stringThirty) {
  console.log('NumberThirty and stringThirty have the same value and type');
} else {
  console.log('NumberThirty and stringThirty variables do not have the same type');
}

if (numberTen == stringTen) {
  console.log('The numberTen and stringTen variables have the same value but different types');
} else {
  console.log('The variables numberTen and stringTen do not have the same value');
}