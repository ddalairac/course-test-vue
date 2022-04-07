/* eslint-disable no-undef */
import {addNumbers} from '../utilities';

test("Check addition numbes", () => {
  expect(addNumbers(4,5)).toEqual(9);
});

test("Adding float number", () => {
  expect(addNumbers(0.4,0.5)).toEqual(0.9);
});

test("Adding float number", () => {
  expect(addNumbers(0.1,0.2)).toBeCloseTo(0.3);
});

