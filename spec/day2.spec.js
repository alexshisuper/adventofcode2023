import {
    isGamePossible,
    getPower,
} from "../src/day2.js";

const loads = {
    red: 12,
    green: 13,
    blue: 14,
};

test.concurrent.each`
  record                                                                        | expected
  ${'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'}                   | ${true}
  ${'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'}         | ${true}
  ${'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'} | ${false}
  ${'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'} | ${false}
  ${'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'}                   | ${true}
`('isGamePossible', ({record, expected}) => {
    expect(isGamePossible(loads, record)).toBe(expected);
});

test.concurrent.each`
  record                                                                        | expected
  ${'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'}                   | ${48}
  ${'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'}         | ${12}
  ${'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'} | ${1560}
  ${'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'} | ${630}
  ${'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'}                   | ${36}
`('isGamePossible', ({record, expected}) => {
    expect(getPower(record)).toBe(expected);
});
