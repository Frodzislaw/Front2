function range(a,b) {
    let array = [];
    let index = 0;

    for(i = a; i<=b; i++){
        array[index] = i;
        index+=1;
    }
    return array;
}

console.log(range(2,5))