/*
Complete the timeConversion function in the editor below. 
It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in 12 hour format
*/
function timeConversion(s) {
    //convert string s to an array
    let newStr = s.split(':');
    //Grab the first element, hour, and save as hr
    let hr = newStr.shift();
    //Convert the string 'hr' to number
    let hour = Number(hr);
    let result;//Place holder for outputs

    let sec = newStr.pop();

    if(hour === 12 && s.indexOf('AM') !== -1){
        result = '0' + (hour - 12);
        //result.toString();
        newStr.unshift(result);
    }else if(hour == 12 && s.indexOf('PM') !== -1){
        result = hour + 0;
        result.toString();
        newStr.unshift(result);
    }else if(hour < 12 && s.indexOf('AM') !== -1){
        result = '0' + (hour + 0);
        newStr.unshift(result);
    }else {
        result = hour + 12;
        result.toString();
        newStr.unshift(result);
    }

    let seconds = sec.split(/[A-Z]/)[0].trim();

    newStr.push(seconds);

    return newStr.join(':');

}

timeConversion('12:05:00AM');