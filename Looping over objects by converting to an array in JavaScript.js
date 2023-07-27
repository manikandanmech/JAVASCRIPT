/*
                                            Looping over objects by converting to an array in JavaScript
In JavaScript, you can loop over objects by converting them into an array of key-value pairs using various methods. 
Once the object is converted into an array,array iteration methods like "for...of" loop, "forEach" method, or other array iteration techniques to access and process the key-value pairs.

*/

//Looping over objects by converting to an array

let user = {
  name: "manikandan",
  age: 20,
  city: "pudukkottai",
  contact: "8525082097",
};

let arr_keys=Object.keys(user);
console.table(arr_keys);

let arr_values=Object.values(user);
console.table(arr_values);

for(let i=0;i<arr_keys.length;i++)
{
  console.log(arr_keys[i]+" : "+arr_values[i]);
  //console.log(user[arr_keys[i]]);
}