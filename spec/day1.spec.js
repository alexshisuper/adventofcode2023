import {
    getCalibrationValue,
    getCalibrationTotal,
    getRealCalibrationValue,
    getRealCalibrationTotal,
} from "../src/day1.js";

test.concurrent.each`
  line             | expected
  ${'1abc2'}       | ${12}
  ${'pqr3stu8vwx'} | ${38}
  ${'a1b2c3d4e5f'} | ${15}
  ${'treb7uchet'}  | ${77}
`('getCalibrationValue', ({line, expected}) => {
    expect(getCalibrationValue(line)).toBe(expected);
});

test("getCalibrationTotal", () => {
    const input = [
        '1abc2',
        'pqr3stu8vwx',
        'a1b2c3d4e5f',
        'treb7uchet',
    ];
    expect(getCalibrationTotal(input)).toBe(142);
});

test.concurrent.each`
  line                   | expected
  ${'two1nine'}          | ${29}
  ${'eightwothree'}      | ${83}
  ${'abcone2threexyz'}   | ${13}
  ${'xtwone3four'}       | ${24}
  ${'4nineeightseven2'}  | ${42}
  ${'zoneight234'}       | ${14}
  ${'7pqrstsixteen'}     | ${76}
`('getRealCalibrationValue', ({line, expected}) => {
    expect(getRealCalibrationValue(line)).toBe(expected);
});

test("getRealCalibrationTotal", () => {
    const input = [
        'two1nine',
        'eightwothree',
        'abcone2threexyz',
        'xtwone3four',
        '4nineeightseven2',
        'zoneight234',
        '7pqrstsixteen',
    ];
    expect(getRealCalibrationTotal(input)).toBe(281);
});
