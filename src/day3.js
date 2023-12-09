// https://adventofcode.com/2023/day/3

// Input: https://adventofcode.com/2023/day/3/input
// var inputs = $("pre").innerText.trim().split("\n");

// --- Part One ---

// [
//     "467..114..",
//     "...*......",
//     "..35..633.",
//     "......#...",
//     "617*......",
//     ".....+.58.",
//     "..592.....",
//     "......755.",
//     "...$.*....",
//     ".664.598..",
// ]

const isNumber = (i) => Number.isInteger(Number(i));

const getPartNumber = (row, column, table) => {
    const line = table[row];
    const firstDigCol = [...line].findLastIndex((item, idx, arr) =>
        idx <= column && isNumber(item) && (idx === 0 || !isNumber(arr[idx - 1]))
    );

    const startRow = Math.max(row - 1, 0);
    const endRow = Math.min(row + 1, table.length - 1);
    const startCol = Math.max(firstDigCol - 1, 0);
    const endCol = Math.min(column + 1, line.length - 1);

    let isPartNumber = false;

    for (let i = startRow; i <= endRow; i++ ) {
        for (let j = startCol; j <= endCol; j++ ) {
            const item = table[i][j];
            if (!isNumber(item) && item !== ".") {
                isPartNumber = true;
            }
        }
    }

    if (isPartNumber) {
        return Number([...line].slice(firstDigCol, column + 1).join(""));
    }

    return 0;
};

export const getSumOfParts = (inputs) => {
    const table = inputs.map(input => input.split(""));

    const parts = [];

    table.forEach((line, row) => {
        line.forEach((item, col) => {
            const isLastInRow = col === line.length - 1;

            if (isNumber(item) && (isLastInRow || !isNumber(line[col + 1]))) {
                parts.push(getPartNumber(row, col, table));
            }
        });
    });

    return parts.reduce((a, b) => a + b);
};

// --- Part Two ---

const getNumber = (line, idx) => {
    const items = [...line];
    const firstIdx = items.findLastIndex(
        (item, index) => (index < idx && !isNumber(item))
    );
    const lastIdx = items.findIndex(
        (item, index) => (index > idx && !isNumber(item))
    );
    const last = lastIdx === -1 ? line.length : lastIdx;

    return {
        number: Number(items.slice(firstIdx + 1, last).join("")),
        id: `${line},${firstIdx}`,
    };
};

const getGearRatio = (row, column, table) => {
    const line = table[row];

    const startRow = Math.max(row - 1, 0);
    const endRow = Math.min(row + 1, table.length - 1);
    const startCol = Math.max(column - 1, 0);
    const endCol = Math.min(column + 1, line.length - 1);

    const nums = [];

    for (let i = startRow; i <= endRow; i++ ) {
        for (let j = startCol; j <= endCol; j++ ) {
            const item = table[i][j];
            if (isNumber(item)) {
                nums.push(getNumber(table[i], j));
            }
        }
    }

    const uniqIds = [...new Set(nums.map(({ id }) => id))];
    const hasGearRatio = uniqIds.length === 2;

    if (hasGearRatio) {
        const [one, two] = uniqIds
            .map((uid) => nums.find(({ id }) => id === uid ).number);
        return one * two;
    }

    return 0;
};

export const getSumOfGearRatios = (inputs) => {
    const table = inputs.map(input => input.split(""));

    const gears = [];

    table.forEach((line, row) => {
        line.forEach((item, col) => {
            if (item === "*") {
                gears.push(getGearRatio(row, col, table));
            }
        });
    });

    return gears.reduce((a, b) => a + b);
};
