function diagonalDifference(arr){
    let output = 0, 
        diagOne = 0, //Input matrix
        diagTwo = 0;
    
    //Loop through array to access diagonals
    for (let i=0; i<arr.length; i++){
        //Calculating the primary diagonal
        diagOne += arr[i][i];
        //
        diagTwo += arr[arr.length -1 -i][i]
    }

    output = Math.abs(diagOne - diagTwo);

    return output;
}