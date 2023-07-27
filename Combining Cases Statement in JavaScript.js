/*
                                            Combining Cases Statement in JavaScript
In JavaScript, you can combine multiple case statements in a switch statement to execute the same block of code for different cases.
Combining cases can help reduce redundancy and make your code more concise.

Syntax:
    switch (expression) {
        case value1:
        case value2:
        case value3:
            // Code to be executed for value1, value2, and value3
            break;
        case value4:
            // Code to be executed for value4
            break;
            // More cases can be added here
        default:
            // Code to be executed if the expression does not match any of the cases
            break;
    }
*/

let letter='p';
switch(letter)
{
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
  case 'A':
  case 'E':
  case 'I':
  case 'O':
  case 'U':
    console.log(letter+" is an Vowel");
    break;
  default:
    console.log(letter+" is not a Vowel");
    break;
}