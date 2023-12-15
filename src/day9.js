// https://adventofcode.com/2023/day/9

// Input: https://adventofcode.com/2023/day/9/input
// var inputs = $("pre").innerText.trim().split("\n");

// --- Part One ---

const getNextLine = (line) => line.reduce((a, c, i, arr) => {
    if (i === 0) {
        return a;
    }
    return [...a, c - arr[i - 1]];
}, []);

export const getPrediction = (history) => {
    const values = history.split(" ").map(Number);
    const matrix = [values];
    let newLine = values;

    do {
        newLine = getNextLine(newLine);
        matrix.push(newLine);
    } while (!newLine.every(i => i === 0))

    return matrix.reduce(
        (a, c) => a + c[c.length - 1]
    , 0);
};

export const solutionOne = (inputs) => {
    return inputs
        .map(getPrediction)
        .reduce((a, c) => a + c);
};

// --- Part Two ---

export const getPrevious = (history) => {
    const values = history.split(" ").map(Number);
    const matrix = [values];
    let newLine = values;

    do {
        newLine = getNextLine(newLine);
        matrix.push(newLine);
    } while (!newLine.every(i => i === 0))

    return matrix.reverse().reduce(
        (a, c) => c[0] - a
    , 0);
};

export const solutionTwo = (inputs) => {
    return inputs
        .map(getPrevious)
        .reduce((a, c) => a + c);
};