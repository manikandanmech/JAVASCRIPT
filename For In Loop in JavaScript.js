/*
                  For In Loop in JavaScript
In JavaScript, the "for...in" loop is a traditional iteration method used to loop over the properties of an object. 
It allows you to iterate through the keys or property names of an object, rather than the values.
The "for...in" loop is particularly useful when you need to access the keys or properties of an object and perform operations on them.

Syntax:
       for (variable in object) {
              // Code to be executed for each property of the object
       }

*/

let user = {
  name: "manikandan",
  age: 20,
  city: "pudukkottai",
  contact: "8525082097",
};

for(let prop in user)
{
  console.log(prop+" : "+user[prop]);
}