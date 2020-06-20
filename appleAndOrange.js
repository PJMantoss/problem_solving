function countApplesAndOranges(s, t, a, b, apples, oranges) {
    /*
    Loop through the apple array to access each element. If the value of an
    apple is greater than or equal to the difference between the s (starting of the houe) and
    a (position of apple tree) but is less than the difference between 
    t (ending of the houe) and a print the length of the array
    */
    console.log(apples.filter(f => s - a <= f && f <= t - a).length);
    console.log(oranges.filter(fr => s - b <= fr && fr <= t - b).length);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])