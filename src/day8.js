// https://adventofcode.com/2023/day/8

// Input: https://adventofcode.com/2023/day/8/input
// var inputs = $("pre").innerText.trim().split("\n");

// --- Part One ---

const generateMap = (network) => {
    return network.reduce((result, line) => {
        const [key, values] = line.split(" = ");
        const [left, right] = values.split("").slice(1, -1).join("").split(", ");
        result[key] = [left, right];
        return result;
    }, {})
};

export const solutionOne = (inputs) => {
    const [navs, , ...network] = inputs;
    const maps = generateMap(network);
    
    let step = 0;
    let element = "AAA"

    while (element !== "ZZZ") {
        step += 1;

        const direction = navs[(step - 1) % navs.length];
        element = maps[element][direction === "L" ? 0 : 1];
    }

    return step;
};

// --- Part Two ---

const getStep = (start, navs, maps) => {
    let step = 0;
    let element = start;

    while (!element.endsWith("Z")) {
        step += 1;

        const direction = navs[(step - 1) % navs.length];
        element = maps[element][direction === "L" ? 0 : 1];
    }

    return step;
}

export const solutionTwo = (inputs) => {
    const [navs, , ...network] = inputs;
    const maps = generateMap(network);
    
    const elements = Object.keys(maps).filter((key) => key.endsWith("A"));

    return elements.map((ele) => getStep(ele, navs, maps));
};

// Least Common Multiple
