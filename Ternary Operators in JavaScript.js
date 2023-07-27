/* 
Ternary Operators in JavaScript
Ternary operators in JavaScript provide a concise way to write conditional statements. The ternary operator is also known as the conditional operator, and it allows you to evaluate a condition and return one of two expressions based on whether the condition is true or false.

Syntax

             condition ? expression1 : expression2;

The condition is evaluated.
If the condition is true, the value of expression1 is returned.
If the condition is false, the value of expression2 is returned.

*/

//Simple Example
const age=20;z
const result=age>=18?"Eligible":"Not Eligible";
console.log(result);

//Handling null values

function welcome (name){
  const result=name?name:"No Name";
  console.log("Welcome "+result);
}
welcome();
welcome(null);
welcome('Mani');


user={'name':'sugu','age':22};
console.log(user);
console.log(user.name);

const greeting=(user)=>{
  const name=user.name?user.name:"No Name";
  return "Hello "+name;
}

console.log(greeting(user));

//Conditional chains

/*
  avg >=90 A grade
  avg >=80 B grade
  C grade
*/

const avg=75;
const grade=avg>=90? "A Grade":avg>=80? "B Grade":"C Grade";
console.log("Grade : ",grade);