//  program to check if a number is Positive, negative or Zero

let n = -12

if(n>0){
    console.log(n, "is positive");
}
else if(n<0){
    console.log(n, "is negative");
}
else{
    console.log(n, "is zero");
}

// Create a program that takes a day of the week as an input (1 for Monday, 2 for Tuesday, etc.).

const day = 3;

switch(day){
    case 1:{
        console.log("Today is Monday");
        break;  
    }
    case 2:{
        console.log("Today is Tuesday");
        break;  
    }
    case 3:{
        console.log("Today is Wednesday");
        break;  
    }
    case 4:{
        console.log("Today is Thursday");
        break;  
    }
    case 5:{
        console.log("Today is Friday");
        break;  
    }
    case 6:{
        console.log("Today is Saturday");
        break;  
    }
    case 7:{
        console.log("Today is Sunday");
        break;  
    }
    default:{
        console.log("Invalid Day");
    }
}

// Use a ternary operator to check if the age is 18 or more and print "Adult" if true, otherwise print "Minor".

let age = 10;
let result = (age>18) ? "Adult":"Minor";

console.log(result);

// Write a program that prints the numbers from 1 to 10 using a for loop.

let i;

for (i = 1; i < 11; i++) {
   console.log(i);
    
}

// Write a program that prints the numbers from 10 to 1 in reverse order using a for loop.

let j;

for ( j = 10; j > 0; j--) {
   console.log(j);  
}