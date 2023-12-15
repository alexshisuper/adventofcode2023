import {
  getPrediction,
  getPrevious,
} from "../src/day9.js";

test("getPrediction", () => {
  expect(getPrediction("0 3 6 9 12 15")).toBe(18);
  expect(getPrediction("1 3 6 10 15 21")).toBe(28);
  expect(getPrediction("10 13 16 21 30 45")).toBe(68);
});

test("getPrevious", () => {
  expect(getPrevious("0 3 6 9 12 15")).toBe(-3);
  expect(getPrevious("1 3 6 10 15 21")).toBe(0);
  expect(getPrevious("10 13 16 21 30 45")).toBe(5);
});

