function staircase(n) {
    let stepsArray = new Array(n).fill(' ');

    while(stepsArray.indexOf(' ') !== -1){
        stepsArray.shift();
        stepsArray.push('#');
        console.log(stepsArray.join(''));
        n--;
    }
}

staircase(6);