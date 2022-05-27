/* eslint-disable no-undef */
import { render, fireEvent } from "@testing-library/vue";
import Home from "../views/Home.vue";

// test("testing components", () => {
//   render(Home) // component is mounted
// })
test("Home component", async () => {
  const { getByText } = render(Home);

  getByText("Login to your account"); // Check exact textmatch in the compoenent

  const buttonElement = getByText("Login"); // Get button element

  await fireEvent.click(buttonElement) // click on button

  // getByText("Please enter your email and password"); // Check exact textmatch error message in been display in the compoenent
})