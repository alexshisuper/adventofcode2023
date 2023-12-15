import {
  solutionOne,
  solutionTwo,
} from "../src/day8.js";

test("solutionOne", () => {
  expect(solutionOne([
    "RL",
    "",
    "AAA = (BBB, CCC)",
    "BBB = (DDD, EEE)",
    "CCC = (ZZZ, GGG)",
    "DDD = (DDD, DDD)",
    "EEE = (EEE, EEE)",
    "GGG = (GGG, GGG)",
    "ZZZ = (ZZZ, ZZZ)",
  ])).toBe(2);
  expect(solutionOne([
    "LLR",
    "",
    "AAA = (BBB, BBB)",
    "BBB = (AAA, ZZZ)",
    "ZZZ = (ZZZ, ZZZ)",
  ])).toBe(6);
});

// test("solutionTwo", () => {
//   expect(solutionTwo([
//     "LR",
//     "",
//     "11A = (11B, XXX)",
//     "11B = (XXX, 11Z)",
//     "11Z = (11B, XXX)",
//     "22A = (22B, XXX)",
//     "22B = (22C, 22C)",
//     "22C = (22Z, 22Z)",
//     "22Z = (22B, 22B)",
//     "XXX = (XXX, XXX)",
//   ])).toBe(6);
// });
