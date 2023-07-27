/*
String Functions in JavaScript

JavaScript has many built-in string functions that can be used to manipulate strings.
Some common string functions include

length: returns the number of characters in a string
toUpperCase(): returns the string in all uppercase letters
toLowerCase(): returns the string in all lowercase letters
indexOf(substring): returns the index of the first occurrence of the specified substring, or -1 if the substring is not found
lastIndexOf(substring): returns the index of the last occurrence of the specified substring, or -1 if the substring is not found
substring(start, end): returns a part of the string between the specified start and end indexes
split(separator): splits a string into an array of substrings based on the specified separator
replace(old, new): replaces all occurrences of a specified string with another string
concat(string2): concatenates two strings

*/

let first_name="Devloper";
let last_name="mani";

//Concatenation
let c=first_name+" "+last_name;
console.log("Concatenation : "+c);

//concat
c=first_name.concat(' ',last_name);
console.log("Concat : "+c);

//append
c="engineer ";
c+="mani";
console.log("Append : "+c);

//Escaping
c='She Can\'t run';
console.log(c);

//Length
c=first_name.length;
console.log("Length : "+c);

//Change Case
c=first_name.toUpperCase();
console.log("Uppercase : "+c);
c=first_name.toLowerCase();
console.log("Lowercase : "+c);

c=first_name.indexOf('T');
console.log("indexOf T : "+c);

c=first_name.lastIndexOf('T');
console.log("lastIndexOf T : "+c);

c=first_name.charAt(1);
console.log("charAt 1 : "+c);

c=first_name.charCodeAt(1);
console.log("charCodeAt 1 : "+c);


c=first_name.substr(0,3);
console.log("substr : "+c);

//Substring
let text = "01234567890";

c=text.substring(0,4)
console.log("Substring : "+c);
c=text.substring(4);
console.log("Substring : "+c);
c=text.substring(4,0);
console.log("Substring : "+c);
c=text.substring(25,30);
console.log("substring Invalid Length : "+c);
c=text.substring(-3);
console.log("-3 : "+c);
//Slice
c=text.slice(2,4);
console.log("slice : "+c);
c=text.slice(4,2);
console.log("slice : "+c);
c=text.slice(25,30);
console.log("slice Invalid Length : "+c);
c=text.slice(-5)
console.log("slice -5: "+c);

//Split in JS
let a="Tutor Joes Computer Education";
c=a.split(" ");
console.log("Split : "+c);
console.table(c);

//replace in js
a="I am from Salem";
console.log("Before Replace : "+a);
c=a.replace('Salem','Chennai');
console.log("After Replace : "+c);

//includes in js
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('rat'));

//trim in js
a=" Joes ";
console.log("Before Trim : "+a.length);
a=a.trim();
console.log("After Trim : "+a.length);

//padStart padEnd
a="5";
a=a.padStart(4,0);
console.log(a);

a="5";
a=a.padEnd(4,0);
console.log(a);

a="5";
a=a.padEnd(4,'$');
console.log(a);

//Long literal strings
//Method-1
let longString="416 students have been placed across 40 different institutions in the academic year 2022-2023!"+
" with 100% Scholarhsip" +
"Maatram has now successfully placed over 2000 students in prestigious institutions across Tamil Nadu.";
console.log(longString);
//Method-2
longString = "416 students have been placed across 40 different institutions in the academic year 2022-2023! \
with 100% Scholarhsip.\
Maatram has now successfully placed over 2000 students in prestigious institutions across Tamil Nadu.";
console.log(longString);

//String.fromCharCode()
console.log(String.fromCharCode(65,66,67,68,97,98,122));