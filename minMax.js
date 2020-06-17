function miniMaxSum(arr) {
    let mini = 0, max = 0;
    for (i=0; i<arr.length; i++){
        let miniArr = arr.pop();
        let maxArr = arr.shift();
        mini += miniArr[i];
        max += maxArr[i];
        console.log(Number(mini) + ' ' + Number(max));
    }
}

miniMaxSum([1, 2, 3, 4, 5])