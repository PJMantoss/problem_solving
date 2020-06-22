function getTotalX(a, b) {
    let count = 0;

        for (let i=0; i<a.length; i++){
            
            for (let j=0; j<b.length; j++){
                if(b[j] % a[i] === 0){
                    count++;
                }
            }
        }

        return count / 2;

}

getTotalX([2,4], [16, 32, 96]);