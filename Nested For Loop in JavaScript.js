/*
                      Nested For Loop in JavaScript
In JavaScript, a nested "for" loop is a loop inside another loop.
It allows you to create more complex looping structures to handle multidimensional data or perform repetitive tasks involving multiple sets of data.

Syntax:
       for (let i = 0; i < outerLength; i++)
       {
              // Code to be executed in the outer loop
              for (let j = 0; j < innerLength; j++)
              {
                     // Code to be executed in the inner loop
              }
       }

*/

let nums=[];
for(let i=0;i<3;i++) //i=0 0<3 1<3
{
  nums.push([]); //nums[0] nums[1]
  for(let j=0;j<3;j++)
  {
    nums[i].push(j);//num[1]={0,1,2}
  }
}

console.log(nums);
console.table(nums);