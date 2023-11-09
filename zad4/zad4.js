function sum(a) {
    const initialValue = 0;
    const sumWithInitial = a.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );
    return sumWithInitial;
}

console.log(sum([3, 7, 5]))