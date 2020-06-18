/*
Given five positive integers, 
find the minimum and maximum values that can be 
calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values 
as a single line of two space-separated long integers.
*/
function miniMaxSum(arr) {
    let mini = 0; //Placeholder for minimum value
    let max = 0; //Placeholder for maximum value
    arr.sort((a,b) => a - b); //Sort elements in ascending order
    let popV = arr.pop(); //Remove the last element in order to calculate minimum value

    //Loop through the remaining elements and sum up to get minimum value
    for (let i=0; i<arr.length; i++){
        mini += arr[i];
    }

    arr.push(popV); //Put back the last element
    arr.shift(); //Remove the first element in order to calculate maximum value
    
    //Loop through the remaining elements and sum up to get maximum value
    for (let j=0; j<arr.length; j++){
        max += arr[j];
    }
//Print the minimum and maximum values
   console.log(mini + " " + max);
}

miniMaxSum([7, 69, 2, 221, 8974])