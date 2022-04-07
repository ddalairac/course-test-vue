/* eslint-disable no-undef */
import { asyncPrint } from '../utilities'
test("Test then func", () => {
  return asyncPrint().then(data => {
    expect(data).toBe('Async Hello World');
  })
})
test("Test async func", async() => {
    await expect(asyncPrint()).resolves.toBe('Async Hello World');
})