function timeConversion(s) {
    let output = [];

    let newStr = s.split(':');
    let lastElem = newStr.pop();
    lastElem.split('/[A-Z]/')[0].trim();

    newStr.push(lastElem);

    let newString = Number(newStr);

    if(newString[0] == 12){
        newString[0] - 12;
        output.push(newString);
    } else {
        newString[0] + 12;
    }

    return output.join(':');

}