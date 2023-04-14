/*
Step 1
    setting the variablse up with the let keyword
    let is used to declare a variable that can be changed
    six variables to be used 
    */
    let first = "I am a string";

    let falsee = false;
    
    let nulle = null;

    let und = undefined;

    let zero = 0;

    let quotes = "";
   /*
Step 2
    setup the evaluation function for truthy or falsey
    */
   evaluation = (val1) =>
   {
        if (val1) {
            console.log(true);
        }
        else if(val1 === false)
        {
            console.log("The boolean value false is falsy.");
        }
        else if (val1 === null) {
            console.log('The null value is falsy.');
        }
        else if (val1 === undefined)
        {
            console.log("undefinded is falsy");
        }
        else if (val1 === 0)
        {
            console.log("Zero is falsy(the only falsy number)");
        }
        else if (val1 === "")
        {
            console.log("The empty string is falsy (the only falsy string)");
        }
   }

   
   /*
Step 3
    compile / evaluate with partner
*/
//
 
// evaluated and finished

evaluation(quotes);

/*Number Line
Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
sum + " is larger than 0";
sum + " is greater than 100";
Values to test:
num1	num2	Expected Print
50	51	"101 is greater than 100"
99	-2	"97 is greater than 0"
0	101	"101 is greater than 100"
500	-500	"0 is equal to 0"
-1000	0	"-1000 is a negative number"
-5	0	"-5 is a negative number"*/

/*Greater Than Or Equal To 5
Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.

Values to test:

num1	num2	Expected Print
5	6	true
10	11	true
0	0	false
1000	-1000	false
6	4	false
5	5	true */

/*Pair and Compare
Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.

Values to test:

param1A	param1B	param2A	param2B	Expected Print
"cat"	"cat"	6	"6"	true
"five"	5	"dog"	"dawg"	false
0	false	"horse"	"horse"	true
"eight"	"eight"	"ate"	"ate"	true
11	"eleven"	"four"	"for"	false
"cake"	"cake"	"pie"	"pie"	true*/