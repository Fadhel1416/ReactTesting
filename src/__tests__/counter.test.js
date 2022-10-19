import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

//test block
test("increments counter", () => {
// render the component on virtual dom
render(<Counter />);

//select the elements you want to interact with
const counter = screen.getByTestId("counter");
const incrementBtn = screen.getByTestId("increment");

//interact with those elements
fireEvent.click(incrementBtn);

//assert the expected result
expect(counter).toHaveTextContent("1");
const decremtBtn=screen.getByTestId("decrement");
expect(decremtBtn).toHaveAttribute('enabled');
fireEvent.click(decremtBtn);

expect(counter).toHaveTextContent("0");

});