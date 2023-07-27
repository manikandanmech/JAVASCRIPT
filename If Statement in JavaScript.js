/*
                                                       If Statement in JavaScript
The "if" statement is used to make decisions based on the evaluation of a condition.
It allows you to execute a block of code if a given condition is true.
If the condition is false, the code inside the "if" block is skipped, and the program continues with the next statement after the "if" block.

Syntax :
         if (condition)
         {
                   // Code to be executed if the condition is true
         }

The "condition" is an expression that evaluates to a Boolean value (true or false). If the condition is true, the code inside the curly braces {} is executed. 
If the condition is false, the code inside the "if" block is skipped.
*/
/*
if(condition)
{
	// Code to be executed if the condition is true
}
*/

let age=prompt("Enter Your Age : ");
if(age!=null && age>=18)
{
  console.log("You are Eligible for Vote.");
}