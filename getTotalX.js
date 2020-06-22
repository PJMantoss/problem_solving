function getTotalX(a, b) {
    let count = 0,
        factor;

        for (let i=0; i<a.length; i++){
            
            for (let j=0; j<b.length; j++){
                if(factor % a[i] === 0 && b[i] % factor === 0){
                    count++;
                }
            }
        }

        return count;

}