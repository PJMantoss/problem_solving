//Write a program that prints a staircase of size n using #.

function staircase(n) {
    //Create an array of n length with empty space for each array item
    let stepsArray = new Array(n).fill(' ');
    //For each loop, push the single-space out and add the # symbol to replace them
    while(stepsArray.indexOf(' ') !== -1){
        stepsArray.shift();//Remove the first element from the array using .shift()
        stepsArray.push('#');//Push the # symbol to the end of the array
        console.log(stepsArray.join('')); //Output each row as a string using .join()
        n--; //
    }
}

staircase(6);