/*
Complete the timeConversion function in the editor below. 
It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in 12 hour format
*/
function timeConversion(s) {

    let newStr = s.split(':');
    let lastElem = newStr.pop();
    let lastElement = lastElem.split(/[A-Z]/)[0].trim();

    newStr.push(lastElement);

    let firstElem = newStr.shift();
    let firstElement = Number(firstElem);
    let result;

    if(firstElement == 12){
        result = firstElement - 12;
        result.toString();
        newStr.unshift(result);
    } else {
        result = firstElement + 12;
        result.toString();
        newStr.unshift(result);
    }

    return newStr.join(':');

}

timeConversion('07:05:45PM');