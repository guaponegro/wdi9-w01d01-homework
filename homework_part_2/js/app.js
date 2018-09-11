// 1) Concatenation allows you to combine strings together
// Concatenation ex. 
// console.log(`I lost my homeowork` + ` and my dog ate it!`)

// Interpolation allows you to combine strings, variables or value together
// let str = "Hi, my name is "
// let diffString = "Steven"
// console.log(str + diffString);

// 2) DRY stands for Don't Repeat Yourself. We should keep this in mind
// to make sure that we are simplifying all our code. We've learned
// functions and loops to keep our code simple

// 3) Assigning a variable is giving a variable its value
// Declaring a variable says you will be using a variable in your code

// 4) We should use const when we are introducing a variable that will not change it's value
// We use let when we have a variable that can change values

// 5) A parent directory is a directory that has other directories inside of it

// 6) The command would be man (command)

/* 7) Tab completion is when you are writing a file/folder name,
you can hit tab and it will complete the file/folder name for you */

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
console.log(a < b < c);
console.log(a + a < d);
console.log(e === "Kevin");
console.log(48 == "48");

// Part 3
// 1) It is not an infinite loop
// 2) This is an infinite loop

// This is setting the value for letters
let letters = "A";
// This is setting the value for i
let i = 0;
//The while loop will produce 20 copies of "A"
while (i < 20) {
	letters += "A";
	i++;
}
// This console log will run the loop
console.log(letters);

// Part 5
// While loops only need a condition and a statement to execute
// For loops can have initialization, conditions, and increment
// or decrement. Once you have these parameters, then can you add the statemnt to executed after 

num = 0;
for( let i = 0; i <= 999; i++){
    console.log(num);
    num++;
}

// 3) The first part of the control statement sets the starting point for the loop
// The second part of the statement lets the limit of the loop
// The third part of the loop makes sure that loop goes from the starting point to the limit

num = 999;
for(let i = 999; i >= 0; i--){
    console.log(num);
    num--;
}

i = 1;
for(let i = 1; i <= 10; i++){
    console.log(`The value of i is: ${i} of 10`);
}







