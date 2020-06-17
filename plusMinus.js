function plusMinus(arr) {
let positive = 0,
    negative = 0,
    zero = 0;
let result1, result2, result3;

    for (let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            positive++;
            result1 = positive / arr.length;
        }
        if(arr[i] < 0){
            negative++;
            result2 = negative / arr.length;
        }
        if(arr[i] == 0){
            zero++;
           result3 = zero / arr.length;
        }
    }

    console.log(result1);
    console.log(result2);
    console.log(result3);

}

plusMinus([-4, 3, -9, 0, 4, 1])