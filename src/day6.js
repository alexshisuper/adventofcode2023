// https://adventofcode.com/2023/day/6

// Input: https://adventofcode.com/2023/day/6/input

// --- Part One ---

export const getHoldTime = (time, distance) => {
    return new Array(time + 1)
        .fill()
        .map((i, index) => {
            const hold = index;
            const v = 1 * hold;
            const t = time - index;
            return v * t;
        })
        .filter((d) => d > distance)
        .length;
};

export const getNumOfWays = (records) => {
    return records.reduce((result, [time, distance]) => {
        const holdTime = getHoldTime(time, distance);
        return result * holdTime;
    }, 1);
};

// --- Part Two ---

export const getHoldTime2 = (t, d) => {
    // a + b = t;
    // a * b > d
    let i;

    for (i = 0; i <= t; i++) {
        if (i * (t - i) > d) {
            break;
        }
    }

    return (t + 1) - i * 2;
};
