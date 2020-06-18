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
        firstElement + 12;
        result.toString();
        newStr.unshift(result);
    }

    return newStr.join(':');

}

timeConversion('07:05:45PM');