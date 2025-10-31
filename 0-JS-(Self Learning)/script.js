// JS History: Mocha -> Livescript -> Javascript -> ECMA Script
// Biggest Update in JS -> ES6

// Defining variable
// var x = 5;
// let y = 10;
// const PI = 3.14;

// Defining Function
// function add(a, b) {
//   return a + b;
// }

// Calling Function
// add(5, 6); // returns 11 to OS, to print it we use console.log()
// console.log(add(5, 6));

// To print anything on console
// console.log("Message"); // Message
// let fName = "Anil";
// console.log(fName); // Anil
// console.log("Anil" + " Solanki"); // Anil Solanki
// console.log(fName, "Hello"); // Anil Hello

// To create alert
// alert("Hello!");

// JS Syntax
// Whitespace in code -> ignored

// whitespace in string -> Not ignored
// but newline character in string creates error, thus to print log to new line we use excape sequence \n

// Statement - A piece of code that either declare a variable or instruct JS engine to perform a task.
// Statement end with semicolon (;) . Not required, but good practice

// Expression - A piece of code that evaluate a value.
// Expression can be suset of a statement, but statement cant be subset of expression.

// Identifier (for functions, classes, objects, array, variable, parameters, etc.)
// Composed of (a-z) U (A-Z) U (0-9) U ( _ ) U ( $ )
// can't start with digit (0-9), are case snsitive, cannot be keyword.

// Comments
// //single line comment
/* Hello i am 
Multiline 
Comment 
*/

// Keywords - 64

// JS Variable
// var variableName; // variable declaration
// variableName = variableValue; // initializaton
// let, const, var all three can be used to create variable. const for constant

// Undefined => Variable jise declare kr diya but initialize nahi kiya. Default value to such variable is undefined
// Undeclared => Variable abhi tak declare hi nahi kiya.

// Constant => Aisa variable jiski value change nahi kar skte. Isko declaration ke time hi initialize krna pdeta hai, vrna bad me toh change kar paoge nahi.

// Data type => Data ka type
// Primitive data type (number, string, boolean, undefined, null, symbol, bigint)
// Ek ko dusre me dal diya jaye toh direct copy mil jati hai.
// Stored in stack memory

// Reference data type (bbject, functions, array, classes)
// Ek ko dusre me dal diya jaye toh direct copy nahu milti hai, reference milta hai. ek me change dusre me bhi change kr dega. Ye reference JS engine deta hai, do alag alag variables ko ek hi head storage ka.
// stored in heap memory

// to get type of value or variable use
// typeof (value);
// //OR
// typeof value

// number => integer or floating number. Decimal having whole number ko js engine integer me convert kr deta hai. like 3.00 -> 3
// To get max positive value > Number.MAX_VALUE, and for minimum positive value > Number.MIN_VALUE
// to get max / min safe integer value > Number.MAX_SAFE_INTEGER, > Number.MIN_SAFE_INTEGER
// special number values are 0, -0, Infinity, -Infinity, NaN
// 5/0 => Infinity ; -9/0 => -Infinity ; 0/0 => NaN ; "Hello" * 4 => NaN
// NaN stands for 'Not a Number'. It is given as output of an invalid number operation.
// Two characteristics of NaN => Any operation with NaN gives NaN, NaN do not equal to anything even NaN itself,  (NaN == NaN) => false

// Numbers can be decimal (Base 10), octal (Base 8), or hexadecimal (Base 16).
// decimal ==> 23, 1, 56, 7, etc. (Digits 0-9)
// octal ==> 0o23, 0o01 etc. (Digits 0-7)
// hexadecimal ==> 0x234 etc. (Digits 0-9 and a-f)
// When octal or hex numbers are involved into arithmatic all will be converted to decimal.
// Bug ==> 0.2 + 0.1 = 0.30000000000000004
// This is because Both 0.1 and 0.2 cannot be represented exactly in binary
// Number can hold fractional part accirately upto 17 places.
// we can use numaric seperator ( _ ) to seperate digits and make it more visually good.
// 123_000_000_67.345_789_000

// string => sequence of characters enclosed within single (') / double ("") quotes or backticks (`)
// starting and ending sign must match 'string' , "string", `string` .
// let name = "Anil";
// let fName = "Anil";
// console.log(`Hey!! ${fName}`);
// We can use escape sequence in strings. \' , \n , \t , \v , \" etc.

// strings in JS is immutable, means once created its characters can be accessed but cannot be modified diretly.
// let str = "Anil";
// console.log(str[0]); // A
// str[0] = 'S'; // Terko lagega ki A ki jagah S aa gya hoga, toh "Anil" ban gya "Snil", but aisa nahi hota.
// console.log(str[0]); // A
// console.log(str); // Anil

// We can concatenate (ADD) strings using + operator
// console.log("Anil" + " SOlanki");
// let fname = "Anil" , grade = 'A';
// console.log(fname + " you got grade: " + grade + ".");
// We can also use other operators like +=, >, <, >= etc.
// 'Anil' + 2 ==> 'Anil2'
// '2' + 2 ==> '22'
// 2 + '2' ==> 4

// To get the length of string
// let str = "Anil";
// console.log(str.length); // 4

// To access the first character of a string
// let str = "Anil";
// console.log(str[0]); // A
// console.log(str.charAt(0)); // A
// To access the last character of string

// Boolean => true or false
// false, '' (empty string), 0, null, undefined, NaN ==> always false
//  rest all are always true, including value true

// Truthy vs Falsy
// false -> '' (empty string), 0, null, undefined, NaN
// truthy -> everything except falsy
// To get nature of any value truthy or falsy
// m-1 : !!value
// m-2 : Boolean(value)

// Symbol => symbol does not have a literal form, it is used to create unique property. We call Symbol() function to create a symbol, each time we call Symbol() it create a new value.
// let s1 = Symbol();
// console.log(Symbol() == Symbol()); // false

// bigint => to manage number greater then max safe integer, we add a n after bigint value.
// let a = 9007199254740994n;

// Object => ollection of properties where each property is a key value pair.
// let person = { name: "Anil", age: 22, city: "Jodhpur" };
// key can be any string, value can be any value string, number, function, object anything.
// Access property of object => dot (.) method, arrat([]) method
// console.log(person.name); // Anil
// console.log(person['name']); // Anil
