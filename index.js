/******************************************
    IteIteration 1 | Tongue Twister
C
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

//Concatenate the string variables into one new string
const tongueTw = s1 + s2 + s3 + s4 + "and " + s3 + s2 + s1 + s4;

console.log(tongueTw);

// Print out the concatenated string

/*******************************************
//     Iteration 1.2 | Camel Tail
// *******************************************/
const part1 = "java";
const part2 = "script";

const camelTa = "javA" + "scripT";
console.log(camelTa);

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

// Print the cameLtaiL-formatted string

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

const tipAmount = billTotal * 0.15;
console.log(tipAmount);

// Calculate the tip (15% of the bill total)

// Print out the tipAmount

/*******************************************
//Iteration 2.2 | Generate Random Number
*******************************************/

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
// Generate a random integer between 1 and 10 (inclusive)

// Print the generated random number

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(expression1);

const expression2 = a || b;
console.log(expression2);

const expression3 = !a && b;
console.log(expression3);

const expression4 = !(a && b);
console.log(expression4);
const expression5 = !a || !b;
console.log(expression5);

const expression6 = !(a || b);
console.log(expression6);

const expression7 = a && a;
