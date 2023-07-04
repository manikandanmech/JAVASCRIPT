/* Operator	Usage
	=	Assigns a value
	+=	Adds a value to a variable.
	-=	Subtracts a value from a variable.
	*=	Multiplies a variable.
	/=	Divides a variable.
	%=	Assigns a remainder to a variable. 

Addition assignment (+=):
       adds the right-side value to the left-side variable and assigns the result to the left-side variable.

Subtraction assignment (-=):
        subtracts the right-side value from the left-side variable and assigns the result to the left-side variable.

Multiplication assignment (*=):
        multiplies the left-side variable by the right-side value and assigns the result to the left-side variable.

Division assignment (/=):
         divides the left-side variable by the right-side value and assigns the result to the left-side variable.

Modulus assignment (%=):
         finds the remainder when the left-side variable is divided by the right-side value and assigns the result to the left-side variable.

Exponentiation assignment (**=):
         raises the left-side variable to the power of the right-side value and assigns the result to the left-side variable. */

//Assignment Operators
let a=10;

//a=a+5;
a+=5;//15
a-=5;//10
a*=5;//50
a/=5;//10
a%=5;//0
console.log(a);