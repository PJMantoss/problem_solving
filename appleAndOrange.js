function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(apples.filter(f => s - a <= f && f <= t - a).length);
    console.log(oranges.filter(fr => s - b <= fr && fr <= t - b).length);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])