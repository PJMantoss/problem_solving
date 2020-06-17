/*
Given an array of integers, calculate the 
fractions of its elements that are positive, 
negative, and are zeros. Print the decimal 
value of each fraction on a new line.
*/

function plusMinus(arr) {
    let positive = 0,
        negative = 0,
        zero = 0;
   // let result1, result2, result3;
    //Loop through arr to access each element
    for (let i=0; i<arr.length; i++){
        if(arr[i] > 0 && arr[i] <= 100){ //If an integer is positive calculate how many and return ratio
            positive++;
            //result1 = ;
        }else if(arr[i] < 0){ //If an integer is negative calculate how many and return ratio
            negative++;
            //result2 = negative / arr.length;
        }else{ //If an integer is zero calculate how many and return ratio
            zero++;
           //result3 = zero / arr.length;
        }
    }
    //Print each ratio on a separate line
    console.log(Number(positive / arr.length).toPrecision(6));
    console.log(Number(negative / arr.length).toPrecision(6));
    console.log(Number(zero / arr.length).toPrecision(6));

}

plusMinus([-4, 3, -9, 0, 4, 1])