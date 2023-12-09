// https://adventofcode.com/2023/day/5

// Input: https://adventofcode.com/2023/day/5/input
// var inputs = $("pre").innerText.trim().split("\n");

// --- Part One ---

export const processMap = (input, map) => {
    const targetRange = map
        .map(line => line.split(" ").map(Number))
        .find(
            ([, source, len]) => input >= source && input < source + len
        );
    
    if (targetRange) {
        const [destination, source] = targetRange;
        return input + destination - source;
    }

    return input;
};

export const processMaps = (input, maps) => {
    return maps
        .reduce((result, map) => processMap(result, map), input);
};

export const getLowestLocation = (inputs) => {
    const seedsline = inputs.shift();
    const seeds = seedsline.split(": ")[1].split(" ").map(Number);

    const rawMaps = inputs.filter(Boolean);
    rawMaps.shift();
    const maps = rawMaps
        .map(line => line.includes("map") ? "|" : line)
        .join("#")
        .split("#|#")
        .map(line => line.split("#"));

    return Math.min(...seeds.map(seed => processMaps(seed, maps)));
};

// --- Part Two ---

const getSeeds = (seedsline) => {
    const seeds = seedsline.split(": ")[1]
        .split(" ")
        .map((item, index, arr) => {
            if (index % 2) {
                return null;
            }
            return {
                start: Number(item),
                len: Number(arr[index + 1]),
            };
        })
        .filter(Boolean);

    return seeds;
};

export const getLowestLocation2 = (inputs) => {
    const seedsline = inputs.shift();
    const seeds = getSeeds(seedsline);

    const rawMaps = inputs.filter(Boolean);
    rawMaps.shift();
    const maps = rawMaps
        .map(line => line.includes("map") ? "|" : line)
        .join("#")
        .split("#|#")
        .map(line => line.split("#"));

    let lowestLocation = Infinity;

    seeds.forEach(({ start, len }, index, arr) => {
        for (let i = start; i < start + len; i++) {
            const location = processMaps(i, maps);
            lowestLocation = Math.min(lowestLocation, location);

            if (i % 100000 === 0) {
                console.log(`seed set ${index + 1}, ${(i - start) / len * 100}%`)
            }
        }
    });

    return lowestLocation;
};

// --- Part Two.1 ---

export const processMap3 = (input, map) => {
    const targetRange = map.find(
        ([, source, len]) => input >= source && input < source + len
    );
    
    if (targetRange) {
        const [destination, source] = targetRange;
        return input + destination - source;
    }

    return input;
};

export const processMaps3 = (input, maps) => {
    return maps
        .reduce((result, map) => processMap3(result, map), input);
};

export const getLowestLocation3 = (inputs) => {
    const seedsline = inputs.shift();
    const seeds = getSeeds(seedsline);

    const rawMaps = inputs.filter(Boolean);
    rawMaps.shift();
    const maps = rawMaps
        .map(line => line.includes("map") ? "|" : line)
        .join("#")
        .split("#|#")
        .map(submap => submap.split("#").map(line => line.split(" ").map(Number)));

    let lowestLocation = Infinity;

    seeds.forEach(({ start, len }, index) => {
        for (let i = start; i < start + len; i++) {
            const location = processMaps3(i, maps);
            lowestLocation = Math.min(lowestLocation, location);

            if (i % 100000 === 0) {
                console.log(`seed set ${index + 1}, ${(i - start) / len * 100}%`)
            }
        }
    });

    return lowestLocation;
};
