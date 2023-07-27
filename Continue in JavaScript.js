/*
Continue in JavaScript
In JavaScript, the "continue" statement is a control flow statement that allows you to skip the rest of the current iteration of a loop and continue with the next iteration.
When the "continue" statement is encountered within a loop, it jumps to the next iteration, bypassing any code following the "continue" statement within that iteration.


*/

for(let i=1;i<=10;i++)
{
  if(i==4){
    continue;
  }
  console.log(i);
}


for(let i=1;i<=10;i++)
{
  if(i%2==0){
    continue;
  }
  console.log(i);
}