/*
         Increment or Decrement Operators in JavaScript
The increment (++) and decrement (--) operators can be used in two forms:
postfix and prefix. 

The difference lies in when the increment or decrement operation takes place in relation to the variable.

Postfix Increment / Decrement (x++ / x--)
The postfix increment (x++) and postfix decrement (x--) operators first return the original value of the variable and then increment or decrement the variable by 1.
Prefix Increment / Decrement (++x / --x)
The prefix increment (++x) and prefix decrement (--x) operators first increment or decrement the variable by 1 and then return the updated value.
             
*/

// Increment (++) or Decrement (--)

let a=1;
a++; //a=a+1
console.log(a);

let b=5;
b--; //b=b-1;
console.log(b);

/*
PostFix Increment   a++
Prefix Increment   ++a
 */

let x=3;
const y=x++; //3

console.log("X : ",x,"Y : ",y);


let i=3;
const j=++i;
console.log("I : ",i,"J : ",j);