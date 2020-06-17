//Write a program that prints a staircase of size n.
function staircase(n) {
    //
    let stepsArray = new Array(n).fill(' ');
    //
    while(stepsArray.indexOf(' ') !== -1){
        stepsArray.shift();//
        stepsArray.push('#');//
        console.log(stepsArray.join('')); //Output each row as a string using .join()
        n--; //
    }
}

staircase(6);