/* eslint-disable no-undef */
import { addNumbers, countriesCollection, johnDoe } from '../utilities';

describe("Unit test", () => {
  describe("Test strings", () => {
    test("Find Substring", () => {
      expect("it's raining cats & dogs").toMatch(/dogs/);
    });
    test("Test description", () => {
      expect("the thing to be tested").toMatch(/thing/);
    });

  })
  describe("Test Addition", () => {
    test("Addition ", () => {
      expect(4+5).toEqual(9);
    });
    test("Check addition number", () => {
      expect(addNumbers(4, 5)).toEqual(9);
    });
    test("Adding float number", () => {
      expect(addNumbers(0.4, 0.5)).toEqual(0.9);
    });
    test("Adding float number", () => {
      expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3);
    });
  })
  describe("Test objects", () => {
    test("Check available countries", () => {
      expect(countriesCollection).toContain('Australia');
    })
    test("Check user info", () => {
      expect(johnDoe).toEqual(expect.objectContaining({
        name: 'John Doe',
        age: 30,
      }));
    })
  })
})