/*
                                                 For Of Loop in JavaScript
In JavaScript, the "for...of" loop is a modern iteration method , that allows you to loop over iterable objects,
such as arrays, strings, sets, maps, and more. The "for...of" loop provides a more concise and readable syntax for iterating over elements compared to traditional "for" loops.

Syntax:
       for (variable of iterable) {
              // Code to be executed for each iteration
       }

*/

let names = ["mani", "sugu", "srikanth", "hari", "bala"];

for(let i=0;i<names.length;i++)
{
  console.log(names[i]);
}
console.log("For of Loop : ")
for(let name of names){
  console.log(name);
  
}
//console.table(names)