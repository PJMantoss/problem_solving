function diagonalDifference(arr){
    let output = 0, diagOne = 0, diagTwo = 0;

    for (let i=0; i<arr.length; i++){
        diagOne += arr[i][i];
        diagTwo += arr[i -1 -i][i]
    }

    output = Math.abs(diagOne - diagTwo);

    return output;
}