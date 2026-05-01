/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // turning the string "5" into an actual number
console.log("The result is: " + result);

let isValid = Boolean("false");//it turn to true any value string, except ""
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25");
let totalAge = age + 5;
console.log("Total Age: " + totalAge);


let score = 10;   // number
let scoreMessage = "Your score is: " + score// score is implicit converted to string
console.log(scoreMessage); // string


let priceText = "19.99"; // string
let price = Number(priceText); // <-- explicit conversion
console.log(priceText)

let edgeCase = Number(null); // it turns to 0
console.log(edgeCase)