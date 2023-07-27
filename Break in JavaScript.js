/*
Break in JavaScript
In JavaScript, the "break" statement is a control flow statement that allows you to exit or terminate a loop or switch statement prematurely.
When the "break" statement is encountered within a loop or switch, the program immediately exits that loop or switch, and execution continues with the next statement after the loop or switch block.

*/

for(let i=1;i<=20;i++)
{
  console.log(i);
  if(i==12){
    break;
  }
}