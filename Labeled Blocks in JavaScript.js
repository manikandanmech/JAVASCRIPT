/*
Labeled Blocks in JavaScript
In JavaScript, labeled blocks are a way to label a block of code using an identifier (label). These labels are used in conjunction with statements like "break" and "continue" to control the flow of execution within nested loops or blocks.

Syntax:
       labelName: {
           // Code block or statements
       }
*/

let groups = [
  ["Srikanth", "Gokul", "Ravi"],
  ["Kumar", "Mani", "Sugu"],
  ["Rajesh", "Sanjay", "Rahul"],
];

for(let group of groups)
{
  inner:
  for(let member of group)
  {
    if(member.startsWith('S')){
      console.log("found one starting with R:", member);
      break inner;
    }
  }
}