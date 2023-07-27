/*
                                    Do While Loop in JavaScript
In JavaScript, a "do-while" loop is a control flow statement that allows you to repeatedly execute a block of code as long as a specified condition is true.
It is similar to the "while" loop, but with one key difference: the "do-while" loop guarantees that the code inside the loop is executed at least once, even if the condition is false from the beginning.

Syntax:
       do {
           // Code to be executed
       } while (condition) ;

*/



let table=11;limit=10;i=1;
do
{
  console.log(table+" X "+i+" = "+(table*i));
  i++;
}while(i<=limit);