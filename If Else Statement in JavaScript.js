/*
If Else Statement in JavaScript
The "if-else" statement is used to implement conditional logic, allowing you to execute different blocks of code based on whether a given condition is true or false.
If the condition in the "if" block is true, the code inside the "if" block is executed.
 If the condition is false, the code inside the "else" block is executed.

Syntax :
         if (condition) {
                   // Code to be executed if the condition is true
         } else {

                   // Code to be executed if the condition is false
         }
*/

/*
  if(condition){
    -----
  }
  else{
    -----
  }
*/

let age=prompt("Enter Your Age : ");
if(age!=null && age>=18)
{
  console.log("You are Eligible for Vote..");
}
else
{
  console.log("You are Not Eligible for Vote..");
}