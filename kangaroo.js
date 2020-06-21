function kangaroo(x1, v1, x2, v2) {
    if(x1 < x2 && v2 < v1){
        return "YES";
    } else {
        return "NO";
    }

}

kangaroo(0, 3, 4, 2); //YES
//kangaroo(0, 2, 5, 3) //NO