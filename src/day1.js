// https://adventofcode.com/2023/day/1

// Input: https://adventofcode.com/2023/day/1/input
// Input data: document.querySelector("pre").innerText.trim().split("\n")

// --- Part One ---

export const getCalibrationValue = (str) => {
    const nums = [...str].filter(i => !isNaN(Number(i)));
    return Number(nums[0] + nums[nums.length - 1]);
};

export const getCalibrationTotal = (input) => {
    return input
        .map(getCalibrationValue)
        .reduce((a, b) => a + b);
};

// --- Part Two ---

const NUMBERS = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
};

export const getRealCalibrationValue = (str) => {
    const list = Object.keys(NUMBERS);

    const firstIdx = Math.min(
        ...list.map(k => str.indexOf(k)).filter(i => i > -1)
    );
    const lastIdx = Math.max(
        ...list.map(k => str.lastIndexOf(k)).filter(i => i > -1)
    );

    let first, last;

    list.forEach(k => {
        if (str.indexOf(k) === firstIdx) {
            first = NUMBERS[k];
        }
        if (str.lastIndexOf(k) === lastIdx) {
            last = NUMBERS[k];
        }
    });

    return Number(first + last);
};

export const getRealCalibrationTotal = (input) => {
    return input
        .map(getRealCalibrationValue)
        .reduce((a, b) => a + b);
};
