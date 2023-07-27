/*
                                           For Loop in JavaScript
In JavaScript, a "for" loop is a control flow statement that allows you to repeatedly execute a block of code for a specific number of iterations.
It is one of the most commonly used loops and is particularly useful when the number of iterations is known or when you want to iterate over elements in an array or other data structures.

Syntax:
       for (initialization; condition; update) {
           // Code to be executed for each iteration
       }
*/

/*
for (initialize variable; condition; statement) {
  // code to be executed
}
*/

for(let i=1;i<=10;i++)
{
  console.log(i);
}

let arr=[];
for(let i=0;i<100;i+=2)
{
  arr.push(i);
}
console.log(arr);
console.log(arr[40]);