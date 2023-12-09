import {
  processMap,
  processMaps,
  getLowestLocation,
  getLowestLocation2,
} from "../src/day5.js";

const seed2Soil = [
  "50 98 2",
  "52 50 48",
];

const soil2fertilizer = [
  "0 15 37",
  "37 52 2",
  "39 0 15",
];

const fertilizer2water = [
  "49 53 8",
  "0 11 42",
  "42 0 7",
  "57 7 4",
];

const water2light = [
  "88 18 7",
  "18 25 70",
];

const light2temperature = [
  "45 77 23",
  "81 45 19",
  "68 64 13",
];

const temperature2humidity = [
  "0 69 1",
  "1 0 69",
];

const humidity2location = [
  "60 56 37",
  "56 93 4",
];

test("processMap", () => {
  expect(processMap(79, seed2Soil)).toBe(81);
  expect(processMap(14, seed2Soil)).toBe(14);
  expect(processMap(55, seed2Soil)).toBe(57);
  expect(processMap(13, seed2Soil)).toBe(13);
});

test("processMaps", () => {
  const maps = [
    seed2Soil,
    soil2fertilizer,
    fertilizer2water,
    water2light,
    light2temperature,
    temperature2humidity,
    humidity2location,
  ];
  expect(processMaps(79, maps)).toBe(82);
  expect(processMaps(14, maps)).toBe(43);
  expect(processMaps(55, maps)).toBe(86);
  expect(processMaps(13, maps)).toBe(35);
});

test("getLowestLocation", () => {
  expect(getLowestLocation([
    "seeds: 79 14 55 13",
    "",
    "seed-to-soil map:",
    "50 98 2",
    "52 50 48",
    "",
    "soil-to-fertilizer map:",
    "0 15 37",
    "37 52 2",
    "39 0 15",
    "",
    "fertilizer-to-water map:",
    "49 53 8",
    "0 11 42",
    "42 0 7",
    "57 7 4",
    "",
    "water-to-light map:",
    "88 18 7",
    "18 25 70",
    "",
    "light-to-temperature map:",
    "45 77 23",
    "81 45 19",
    "68 64 13",
    "",
    "temperature-to-humidity map:",
    "0 69 1",
    "1 0 69",
    "",
    "humidity-to-location map:",
    "60 56 37",
    "56 93 4",
  ])).toBe(35);
});

test("getLowestLocation2", () => {
  expect(getLowestLocation2([
    "seeds: 79 14 55 13",
    "",
    "seed-to-soil map:",
    "50 98 2",
    "52 50 48",
    "",
    "soil-to-fertilizer map:",
    "0 15 37",
    "37 52 2",
    "39 0 15",
    "",
    "fertilizer-to-water map:",
    "49 53 8",
    "0 11 42",
    "42 0 7",
    "57 7 4",
    "",
    "water-to-light map:",
    "88 18 7",
    "18 25 70",
    "",
    "light-to-temperature map:",
    "45 77 23",
    "81 45 19",
    "68 64 13",
    "",
    "temperature-to-humidity map:",
    "0 69 1",
    "1 0 69",
    "",
    "humidity-to-location map:",
    "60 56 37",
    "56 93 4",
  ])).toBe(46);
});
