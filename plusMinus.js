function plusMinus(arr) {
let result,
    positive = 0,
    negative = 0;

    for (let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            positive++;
            result = positive / arr.length;
        }
        if(arr[i] < 0){
            negative++;
            result = negative / arr.length;
        }
        if(arr[i] == 0)
    }

}