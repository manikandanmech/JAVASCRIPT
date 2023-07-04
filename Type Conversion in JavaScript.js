/*Type Conversion in JavaScript:
    In JavaScript, type conversion is the process of changing the data type of a variable or a value. 
    This can be done using various built-in functions and methods.

Few Examples of Type Conversion
Strings to Numbers
Numbers to Strings
Dates to Numbers
Numbers to Dates
Boolean to Numbers
Numbers to Boolean
____________________________________________________________________________________________________________
Type conversion Methods

String(value) : Converts the given value to a string.
Number(value) : Converts the given value to a number.
Boolean(value) : Converts the given value to a boolean.
parseInt(value) : Converts the given value to an integer.
parseFloat(value) : Converts the given value to a floating-point number.

JavaScript also has some unary operators that perform type conversion
___________________________________________________________________________________________________________

+value : Converts the given value to a number.
-value : Converts the given value to a number.
!value : Converts the given value to a boolean.

It is also possible to convert a value to a different type using the valueOf() and toString() methods.
___________________________________________________________________________________________________________
*/

//Type Conversion

let a;
//Others to String >>>>>>>>

a=25;
console.log(a,typeof a);
a=String(25);
console.log(a,typeof a);

a=25.5;
console.log(a,typeof a);
a=String(25.5);
console.log(a,typeof a);

a=true;
console.log(a,typeof a);
a=String(true);
console.log(a,typeof a);

a=new Date();
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);

a=[1,2,3,4,5]
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);


a=25
console.log(a,typeof a);
a=a.toString();
console.log(a,typeof a);


//String to number >>>>>>>>
a="1234"
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

a=true;
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

a=[1,2,3,4,5];
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);


a="Tutor Joes";
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

a='35';
console.log(a,typeof a);
a=parseInt(a);
console.log(a,typeof a);

a='35.55';
console.log(a,typeof a);
a=parseInt(a);
console.log(a,typeof a);

a='35.55';
console.log(a,typeof a);
a=parseFloat(a);
console.log(a,typeof a);