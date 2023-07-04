/* Mastering the JavaScript Console >>>
   In javascript, the console is an object which provides access to the browser debugging console
   The console object provides us with several different methods :

log()
error()
warn()
clear()
time() and timeEnd()
table()
count()
custom console logs */

console.log("Welcome To Maatram Foundation");
console.log(123456);
console.log(18.25);
console.log(true);
console.log([58,78,96,35]);
console.log({fname:'mani',age:20});
console.table({fname:'mani',age:20});
console.error("Custom Sample Error");
console.warn("Custom Sample Error");
console.clear();
console.time("Timer");
for(i=0;i<10;i++)
{
  console.log(i);
}
console.timeEnd("Timer");