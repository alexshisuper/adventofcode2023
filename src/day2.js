// https://adventofcode.com/2023/day/2

// Input: https://adventofcode.com/2023/day/2/input
// Input data: document.querySelector("pre").innerText.trim().split("\n")

// --- Part One ---

// input:
// "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"

// output:
// [{
//     blue: 3,
//     red: 4,
// }, {
//     red: 1,
//     green: 2,
//     blue: 6,
// }, {
//     green: 2,
// }]

const getGameSets = (record) => {
    const [, gameSets] = record.split(": ");
    const sets = gameSets.split("; ");

    return sets.map(set =>
        set.split(", ").reduce((acc, cur) => {
            const [value, key] = cur.split(" ");
            acc[key] = Number(value);
            return acc;
        }, {})
    );
};

export const isGamePossible = (loads, record) => {
    const sets = getGameSets(record);
    const {
        red: totalRed = 0,
        blue: totalBlue = 0,
        green: totalGreen = 0,
    } = loads;
    
    return sets.every(({ red = 0, blue = 0, green = 0 }) => 
        red <= totalRed && blue <= totalBlue && green <= totalGreen
    );
};

const getGameId = (record) => {
    const [gameId] = record.split(": ");
    const [, id] = gameId.split(" ");
    return Number(id);
};

export const solutionOne = (inputs) => {
    const loads = {
        red: 12, 
        green: 13,
        blue: 14,
    };

    return inputs
        .filter(input => isGamePossible(loads, input))
        .map(getGameId)
        .reduce((a, b) => a + b);
};
    
// --- Part Two ---

export const getPower = (record) => {
    const sets = getGameSets(record);
    const minCubes = sets.reduce(
        ({
            minRed = 0,
            minBlue = 0,
            minGreen = 0,
        }, {
            red = 0,
            blue = 0,
            green = 0,
        }) => ({
            minRed: Math.max(red, minRed),
            minBlue: Math.max(blue, minBlue),
            minGreen: Math.max(green, minGreen),
        }), {});

    return minCubes.minRed * minCubes.minBlue * minCubes.minGreen;
};

export const solutionTwo = (inputs) => {
    return inputs
        .map(getPower)
        .reduce((a, b) => a + b);
};
