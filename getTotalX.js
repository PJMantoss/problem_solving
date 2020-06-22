/*
You will be given two arrays of integers and asked to determine all 
integers that satisfy the following two conditions:

1.The elements of the first array are all factors of the integer being considered
2. The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. 
You must determine how many such numbers exist.

Complete the getTotalX function in the editor below. 
It should return the number of integers that are betwen the sets.
*/
function getTotalX(a, b) {
    let count = 0;

    for (let i = 1; i <= 100; i++){
        if(a.every(v => (i % v == 0))){
            if(b.every(v => (v % i == 0))){
                count++;
            }
        }
    }

    return count;
}

getTotalX([2,4], [16, 32, 96]);