function calculateGrade(marks) {
    let result;
    const sum = marks.reduce((acc, el) => {
        return acc + el;
    }, 0);

    result = Math.trunc(sum / marks.length);

    if (result >= 1 && result <= 49) {
        return 'F';
    } else if(result >= 50 && result <= 59) {
        return 'E';
    } else if(result >= 60 && result <= 69) {
        return 'D';
    } else if(result >= 70 && result <= 79) {
        return 'C';
    } else if(result >= 80 && result <= 89) {
        return 'B';
    } else if(result >= 90 && result <= 100) {
        return 'A';
    } else {
        return 'Invalid mark'
    } 

}

console.log(calculateGrade([80, 80, 70]));
console.log(calculateGrade([19, 5, 42, 2, 77]));
console.log(calculateGrade([59, 80, 40, 2, 77]));
console.log(calculateGrade([89, 50, 40, 90, 77]));


// module.exports =calculateGrade
