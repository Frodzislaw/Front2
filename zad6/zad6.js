function palindrom(a) {
    let array = a.split("").reverse().join("");

    return a === array
}

console.log(palindrom('kajak'))