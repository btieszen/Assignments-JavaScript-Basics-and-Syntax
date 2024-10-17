//declare varible
let num1= 10;
let num2 =5;

let x=num1;
let y=num2;

//Task 3: Perform arithmetic operations

let sum =(x+y);
let difference=(x-y);
let product=(x*y);
let quotient=(x/y);

console.log("Task 1 perform aritnmetic operation");
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

//Assignment operators
let updatedNum1 = x+=y;
let updatedNum2 =	x-=y;


console.log("updated num")
console.log("Updated num1:",updatedNum1);
console.log("Updated num2:", updatedNum2);

// Task 5: Use comparison operators

let isEqual = num1==num2;
let isGreaterThan =num1>num2;
let isNotEqual = num1!=num2;

console.log('Comparison Operators')
console.log("Is num1 equal to num2?", isEqual);
console.log("Is num1 greater than num2?", isGreaterThan);
console.log("Is num1 not equal to num2?", isNotEqual);

// Task 6: Apply logical operators
let isPositive = num1>0==num2>0;



let isEven1 =num1 % 2 == 0;
let isEven2 =num2 % 2 == 0
console.log('To see if both numbers are positive')
console.log("Are both numbers positive?", isPositive);
console.log('To see is at least one number is even')
console.log("Num1 is even?", isEven1);
console.log("Num2 is even?", isEven2);

