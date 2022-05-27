/* eslint-disable no-undef */
import { asyncPrint } from "../utilities";

// Las 2 formas son válidas, solo cambia la sintaxis

/* test ("Test asynchronous printing", () => {
    return asyncPrint().then(data => {
        expect(data).toBe("Hello World");
    })
}) */

test("Test asynchronous printing", async () => {
  await expect(asyncPrint()).resolves.toBe("Hello World");
})