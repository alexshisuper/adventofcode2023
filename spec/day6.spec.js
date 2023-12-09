import {
  getHoldTime,
  getNumOfWays,
  getHoldTime2,
} from "../src/day6.js";

test("getHoldTime", () => {
  expect(getHoldTime(7, 9)).toBe(4);
  expect(getHoldTime(15, 40)).toBe(8);
  expect(getHoldTime(30, 200)).toBe(9);
});

test("getNumOfWays", () => {
  expect(getNumOfWays([[7,9], [15,40], [30,200]])).toBe(288);
});

test("Part 2: getHoldTime2", () => {
  expect(getHoldTime2(7, 9)).toBe(4);
  expect(getHoldTime2(15, 40)).toBe(8);
  expect(getHoldTime2(30, 200)).toBe(9);
  expect(getHoldTime2(71530, 940200)).toBe(71503);
});
