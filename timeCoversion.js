/*
Complete the timeConversion function in the editor below. 
It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in 12 hour format
*/
function timeConversion(s) {

    let newStr = s.split(':');

    let firstElem = newStr.shift();
    let firstElement = Number(firstElem);
    let result;

    let thirdElem = newStr.pop();

    if(firstElement === 12 && s.indexOf('AM') !== -1){
        result = '0' + (firstElement - 12);
        //result.toString();
        newStr.unshift(result);
    }else if(firstElement == 12 && s.indexOf('PM') !== -1){
        result = firstElement + 0;
        result.toString();
        newStr.unshift(result);
    }else if(firstElement < 12 && s.indexOf('AM') !== -1){
        result = '0' + (firstElement + 0);
        //result.toString();
        newStr.unshift(result);
    }else {
        result = firstElement + 12;
        result.toString();
        newStr.unshift(result);
    }

    let thirdElement = thirdElem.split(/[A-Z]/)[0].trim();

    newStr.push(thirdElement);

    return newStr.join(':');

}

timeConversion('12:05:00AM');