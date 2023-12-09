import {
    getSumOfParts,
    getSumOfGearRatios,
} from "../src/day3.js";

const inputs = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];

test("getSumOfParts", () => {
  expect(getSumOfParts(inputs)).toBe(4361);
});

test("getSumOfGearRatios", () => {
  expect(getSumOfGearRatios(inputs)).toBe(467835);
});
