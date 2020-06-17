function miniMaxSum(arr) {
    let mini = 0, max = 0;
        let miniArr = arr.pop();
        let maxArr = arr.shift();
    for (let i=0; i<miniArr.length; i++){
        mini += miniArr[i];
        for (let j=0; j<maxArr.length; j++){
            max += maxArr[j];
            console.log(mini + ' ' + max);
        }
    }
}

miniMaxSum([1, 2, 3, 4, 5])