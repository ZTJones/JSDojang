// We're going to use for loops here. 

// write a for loops that prints out all the numbers from 1 to 100.  (Or logs it at least);

// for(let y=1;y<101;y++){
//     console.log(y);
// }



// let x = 1
// for 



let blah = 1;
// while(true)
// {
//     if(blah < 101)
//     {
//         console.log(blah);
//         blah++;
//     }
//     else
//     {
//         break;
//     }    


//     // This function leaves the game
// }
// var statusCount = 1;
// do{
//     statusCount = getStatus();
//     console.log(statusCount);
// }while (statusCount <= 100)

// function getStatus()
// {
//     //get the remote status of the thing.
// }

// do{
//     // We do this stuff first

// }while(true); // Then we check and see if the stuff in parenthesis is "true".
// Sweet, sweet freedom.

// function pollingTest(){
//     console.log("Hello world, this is 5 seconds apart");
// }

// for(let i = 1; i > 0; i++){
//     console.log(i); // ??????
// }



// while(true)
// {
//     setTimeout(test => {
//         console.log("Hello world, this is 5 seconds apart");
//     }, 5000);
// }

// setInterval // This is what I was thinking about David.
// let counter = 0;
// let intervalID = setInterval(() => {
//     console.log("This happens every 5 seconds");
//     counter++;
    
    
// }, 5000);


// new Promise(r => setTimeout(window.clearInterval(intervalID), 10000))
//     .catch(console.log('SOMETHING went wrong.'));
// console.log("test");
// await new Promise(r => {setTimeout(r=2000)})




// var dog = "dog";


// function test() {
//     var dog = "Not dog";
// }

let char = 'c';
let char2 = 'k';

let stringTest = "Hello World!";

// Given a string, print all the letters out individually.


// loop

// console.log

// for(let i = stringTest.length - 1; i >= 0; i--){
//     console.log(stringTest[i]);
// }




// let holderString = "";
// for(let i = stringTest.length - 1; i >= 0; i--){
//     holderString += stringTest[i];
// }
// console.log(holderString);

// given a string, reverse the string, then output the result using console.log

let holder;
for(let i = 0; i < stringTest.length / 2; i++){
    console.log("Loop is running");
    holder = stringTest[i];
    // console.log(stringTest[(stringTest.length - 1) - i]);
    // console.log(stringTest[i]);
    stringTest[i] = stringTest[(stringTest.length - 1) - i];
    stringTest[(stringTest.length - 1) - i] = holder;
    // console.log(holder);
    console.log(stringTest);
}
console.log(stringTest);


function maybeThisWorks(str){
    let holder;
    for(let i = 0; i < str.length / 2; i++){
        console.log("Loop is running");
        // str.
    }
    console.log(str);
}

// maybeThisWorks(stringTest);