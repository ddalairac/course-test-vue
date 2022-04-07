/* eslint-disable no-undef */
import { render } from "@testing-library/vue";
import Home from "../views/Home.vue";

test("testing components", () => {
  render(Home)
})
test("getByText", () => {
  const { getByText } = render(Home)
})