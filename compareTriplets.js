/* COMPARE TRIPLETS
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .

Your task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], a[2] and  with b[2].

If a[i] > b[i], then Alice is awarded  point.
If a[i] < b[i], then Bob is awarded  point.
If  a[i] == b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

For example, a = [1,2,3] and b = [3,2,1]. For elements 0, Bob is awarded a point because a[0] < b[0]. For the equal elements  and , no points are earned. Finally, for elements ,  so Alice receives a point. Your return array would be  with Alice's score first and Bob's second.

Function Description

Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.
*/

function compareTriplets(a, b) {
    let  output = [], //Final result variable
         aliceScore = 0, //Placeholder for Alice's score
         bobScore = 0; //Placeholder for Bob's score
    
    //Loop through 'a' to access each score
    for (let i=0; i<a.length; i++){
        let cur = a[i]; //current value in a

        for (let j=0; j<b.length; j++){
            let cur2 = b[j]; //current value in b
            if(cur > cur2 && i == j){ //If current value in a is greater than in b at the same index add to Alice's score
                aliceScore++;
            } else if(cur2 > cur && i == j){ //If current value in b is greater than in a at the same index add to Bob's score
                bobScore++;
            } 
        }
    }
    output.push(aliceScore, bobScore); // Push new scores into the final result variable and return it
    return output;    
    }

compareTriplets([5,6,7], [3,6,10]); // [1,1]