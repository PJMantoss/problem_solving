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

    if(hour === 12 && s.indexOf('AM') !== -1){//If it's midnight convert to military time
        result = '0' + (hour - 12); //Prepend 0 to hour to format time to 00:00:00
        newStr.unshift(result);//add new hour to the beginning of array
    }else if(hour == 12 && s.indexOf('PM') !== -1){ //If it's noon convert to military time
        result = hour + 0;
        result.toString(); //Convert to string and add to the beginning of array
        newStr.unshift(result);
    }else if(hour < 12 && s.indexOf('AM') !== -1){//If it's before noon (1-11AM) convert to military time
        result = '0' + (hour + 0);
        newStr.unshift(result);
    }else {
        result = hour + 12;
        result.toString();//Convert to string and add to the beginning of array
        newStr.unshift(result);
    }

    //Grab the last element, second, and save as sec
    let sec = newStr.pop();
    
    //Trim off AM/PM from the sec and save as seconds
    let seconds = sec.split(/[A-Z]/)[0].trim();

    //Add the seconds value back to the array newStr
    newStr.push(seconds);

    //Convert newStr back into a string and return the final result
    return newStr.join(':');

}

timeConversion('12:05:00AM');