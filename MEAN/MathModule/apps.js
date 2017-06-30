var mathmodule = require('./Mathlib');
var get_math_obj = mathmodule();
// console.log(get_math_obj);


// Assuming arguments are always numbers

console.log(get_math_obj.add());
console.log(get_math_obj.add(1));
console.log(get_math_obj.add(2));
console.log(get_math_obj.add(1,2));

console.log(get_math_obj.multiply());
console.log(get_math_obj.multiply(2));
console.log(get_math_obj.multiply(3));
console.log(get_math_obj.multiply(2,3));

console.log(get_math_obj.square());
console.log(get_math_obj.square(7));

console.log(get_math_obj.random());
console.log(get_math_obj.random(10));
console.log(get_math_obj.random(5));
console.log(get_math_obj.random(5,10));
