const fibs = (n) => {
    if (n <= 0) throw new Error('Only positive integers are valid.');

    let arr = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            arr.push(0);
        } else if (i === 1) {
            arr.push(1);
        } else {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
    }

    return arr;
};

const fibsRec = (n) => {
    if (n <= 0) throw new Error('Only positive integers are valid.');

    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const previous = fibsRec(n - 1);
        return [...previous, previous.at(-1) + previous.at(-2)];
    }
};

console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(5));
console.log(fibsRec(8));
console.log(fibsRec(20));
