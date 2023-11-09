function fibonnaci(a) {
    let array = [];
    let i = 3;

    if(a >= 0){
        array[0] = 0;
    }
    if(a >=1){
        array[1] = 1;
    }
    if(a >=2){
        array[2] = 1;
    }
    if(a >=3){
        for(i = 3; i < a; i++){
            array[i] = array[i-1] + array[i-2];
        }
    }

    return array;
}

console.log(fibonnaci(9))