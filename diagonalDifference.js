function diagonalDifference(arr){
    let output = 0, //Final result variable
        diagOne = 0, //Input matrix
        diagTwo = 0;
    
    //Loop through array to access diagonals
    for (let i=0; i<arr.length; i++){
        //Calculate the outer array
        diagOne += arr[i][i];
        //Reverse and calculate the inner array
        diagTwo += arr[arr.length -1 -i][i]
    }
     
    //return absolute difference between diagonals
    output = Math.abs(diagOne - diagTwo);

    return output;
}