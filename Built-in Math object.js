/* 


The first line assigns the value of PI to the variable c using the Math.PI constant.
The next line assigns the value of E to the variable c using the Math.E constant.
The next line uses the Math.round() function to round the number 5.8 to the nearest integer, which is 6. The result is assigned to the variable c.
The next line uses the Math.floor() function to round the number 5.58 down to the nearest integer, which is 5. The result is assigned to the variable c.
The next line uses the Math.ceil() function to round the number 5.58 up to the nearest integer, which is 6. The result is assigned to the variable c.
The next line uses the Math.sqrt() function to find the square root of 90, which is 9.486832980505138. The result is assigned to the variable c.
The next line uses the Math.abs() function to find the absolute value of -45, which is 45. The result is assigned to the variable c.
The next line uses the Math.trunc() function to truncate the number 4.9 and returns the integer part, which is 4. The result is assigned to the variable c.
The next line uses the Math.pow() function to find the power of 2 raised to 4, which is 16. The result is assigned to the variable c.
The next line uses the Math.min() function to find the minimum number among 10, 50, 5, 45, and 8, which is 5. The result is assigned to the variable c.
The next line uses the Math.max() function to find the maximum   

*/

// Math Object

c=Math.PI;
c=Math.E;
c=Math.round(5.8);
c=Math.floor(5.58);
c=Math.ceil(5.58);
c=Math.sqrt(90);
c=Math.abs(-45);
c=Math.trunc(4.9);//Return Integer only
c=Math.pow(2,4);
c=Math.min(10,50,5,45,8);
c=Math.max(10,50,5,45,8);
c=Math.random();
c=Math.floor((Math.random()*50+1));
c=Math.sign(1); //Return Neg=-1 Zero=0 Pos=1
c=Math.sin(90);
c=Math.cos(90);
c=Math.log(1);
c=Math.log2(10);
c=Math.log10(10);

console.log(c)