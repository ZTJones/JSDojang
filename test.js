/*

    ..................................................
    :                    ......                      :
    :                 .:||||||||:.                   :
    :                /            \                  :
    :               (   o      o   )                 :
    :-------@@@@----------:  :----------@@@@---------:
    :                     `--'                       :
    :                                                :
    :                                                :
    :         K I L R O Y   S A Y S   H I !          :
    :................................................:

*/
// yo - says dbristol


// I see you David.

// I know!  So maybe you should MOD this discussion! </hint> 😂
// Let's look into modulos next time, I've got a feeling it's going to come in handy. :)
// Given an array/list of numbers, replace numbers divisble by 3 with Fizz, replace numbers divisible by 5 with Buzz, and replace numbers divisible by both with FIZZBUZZ



let basicList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let movieList = ["Jaws", "Friday the 13th", "KPAX", "Airplane!", "Avatar", "The Fifth Element"];
// this should be solved as [0, 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FIZZBUZZ];

function fizzBuzz(numList){
    // Insert cool code here
    // console.log(numList);

    // loop - iterate, or scan through, all of the elements of input array/list. 
    for(let i = 0; i < numList.length; i++){
        // in here.
        // console.log(numList[i]);
        

        // here
    }
    // conditional - if statement, switch statements
    if(numList[0] == 0){
        
    }


    // return FizzBuzzList;
}


fizzBuzz(basicList);

// Recursion is fun!
function fizzBuzzRec(numList){ // a recursive version
    
    
    // fizzBuzzRec( info, more info);
}


// Hello world testing area


//Jeff - Test If/Else Loop
// for (let i= 0; i<16 ; i++ ){

//     if (condition) 
//     {
//         i/3= //A Whole Number
        
//         //Then replace number with "Fizz"
        
//         if (condition)
        
//         i/5= //A Whole Number
        
//         //Then replace number with "FIZZBUZZ"
        
        
        
//     } else 
//     {
//         // Return i
//     }
    
// }

// Variables, conditionals (if, else), Loops! (for, while)

// Next dictionaries, arrays/lists, functions




// After this point, define a variable to hold your name
// True or false?  Boolean
let quickBool;
// let quickBool = true; 
quickBool = true; 


const movementSpeed = 5; // const means constant.  It means that this never changes.
// String
let dania = "dania";
// Integers
// let a = 2;
// let b = 3;
// let c = a + b;
// let Cool = "Zach";
// console.log (Cool);


// if( Cool == "Zach"){
//     console.log("Zach is the best!");
// } else {
//     console.log(Cool + " is the best! Zach is not though.");
// }

// while(Cool == "Zach")
// {
//     console.log("Help, I'm stuck in a loop, and everything is bad.");

//     Cool = "Joseph";
// }

// for(let i = 0; i < 100; i++)
// {
//     console.log(i);
// }



// Make some variables
// Age
// DOB
// FaveVehicle
// likesDogs

let age = 27;
let dob = "19/10/1994";
let FaveVehicle = "RollsRoyce";
let likedogs = false;

let dateThing =  Date.now();
// dateThing.getFullYear()



let daniaAge = 104;
let daniaDOB = "01/01/1900";
let daniaFavVehicle = "rollerblabes";
let danialikesDogs = true;

// console.log(daniaAge);

daniaAge = 122;
// console.log(daniaAge);



// c += 10;
// console.log(c);
// c++;
// console.log(c);


// while(c < 1000)
// {
//     c += 10;
//     console.log(c);
// }

let wordList = ["Hello", "World", 42, "42", "Pizza"];

// console.log(wordList[0]);  // What do we get?
// console.log(wordList[4]);  // and here?
// console.log(wordList[2]);
// console.log(wordList[3]); // What's different about how these are output?


let map = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    
]

// console.log(map);
// console.log(map[0]);
// console.log(map[0][5]);
// console.log(map[0][5]);
// console.log(map[0][5]);
let HoldingArray = [
    // [],
];

for(let y = 0; y < map.length; y++){
    HoldingArray.push([]);
    for(let x = 0; x < map[0].length; x++){
        // console.log(map[y][x]);
        HoldingArray[y].push(map[y][x]);
    }
    // console.log(map[y]);
}
HoldingArray[3][5] = 25;

console.log("Holding:", HoldingArray);
console.log("Map:", map);



// let testA = 5;
    // let testB = testA;
    // testB = testB + 10;
    // console.log("test A: " + testA);
    // console.log("test B: " + testB);




// let x = [0,1,2,3];
// let y = x;
// console.log("before change " + x[0]);
// console.log("before change " + y[0]);
// y[0] = 1000;
// console.log("after " +x[0]);
// console.log("after " + y[0]);
// y.push(20)
// console.log("test x:", x);
// console.log("test y:", y);
// console.log(y[1]);
// console.log(y[0]);



