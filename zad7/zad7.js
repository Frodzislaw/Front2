function isHappyNumber(a) {
    if(a < 10){
        if(a === 1 || a === 7){
            return true;
        }
        return false;
    }
    let array = a.toString().split("");
    let suma = 0;

    for(i = 0; i < array.length; i++){
        suma += (parseInt(array[i]) * parseInt(array[i]));
    }

    return isHappyNumber(suma);

}

console.log(isHappyNumber(20))