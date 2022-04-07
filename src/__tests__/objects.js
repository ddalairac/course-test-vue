/* eslint-disable no-undef */
import { countriesCollection, johnDoe } from '../utilities';
test("Check available countries", () => {
  expect(countriesCollection).toContain('Australia');
})

test("Check user info", () => {
  expect(johnDoe).toEqual(expect.objectContaining({
    name: 'John Doe',
    age: 30,
  }));
})