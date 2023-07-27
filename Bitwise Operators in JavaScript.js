/*
Bitwise Operators in JavaScript
Bitwise operators in JavaScript are used to manipulate the individual bits of integer values at the binary level. These operators perform bit-level operations on the binary representations of the values. Bitwise operations are commonly used in low-level programming, cryptography, and certain optimization techniques.

Sno	  Operator	                 Usage
1.	Bitwise AND (&)	            Bitwise AND assignment (&=)
2.	Bitwise OR (|)	            Bitwise OR assignment (|=)
3.	Bitwise NOT (~)	
4.	Bitwise XOR (^)	            Bitwise XOR assignment (^=)
5.	Left shift (<<)	            Left shift assignment (<<=)
6.	Right shift (>>)          	Right shift assignment (>>=)
7.	Unsigned right shift (>>)  	Unsigned right shift assignment (>>>=)
*/

//Bitwise Operators in js

//&
let a=12;//1100
let b=24;//11000

console.log(a&b);

//&=
a&=b;
console.log(a);


// | (Bitwise or)
a=12;//1100
b=24;//11000
console.log(a|b);

//|=
a|=b;
console.log(a);


// ~    ~a = -a-1
a=12;  //-25-1=-26
console.log(~a);

// ^
a=12;
b=6;
console.log(a^b);

//<<
a=5;
b=2;
console.log(a<<b);
a<<=b;
console.log(a);

//>>
a=8;
b=2;
console.log(a>>b);
a>>=b;
console.log(a);

// >>>
a=-11;
b=2;



/*
0010
0011
----
0010

0000 1100    12
0001 1000    24
-----------------
0000 1000    8


0000 1100    12
0001 1000    24
-----------------
0001 1100    8
*/
