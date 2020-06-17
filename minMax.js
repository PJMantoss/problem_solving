function miniMaxSum(arr) {
    let mini = 0;
    let max = 0;
    let popV = arr.pop();
   
    for (let i=0; i<arr.length; i++){
        mini += arr[i];
    }

    arr.push(popV);
    arr.shift();

    for (let j=0; j<arr.length; j++){
        max += arr[j];
    }

   console.log(mini + " " + max);
}

miniMaxSum([1, 2, 3, 4, 5])