function countTruthy(arr) {
    let count = 0;
    arr.map((el) => {
        if (el) {
            count++
        }
    })
    return count;
}

console.log(countTruthy([6, 3, 0, 30, 7]));

module.exports = countTruthy