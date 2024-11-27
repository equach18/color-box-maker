import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a box", () => {
  const { getByLabelText, queryByText } = render(<BoxList />);
  //   expect no box to delete
  expect(queryByText("X")).not.toBeInTheDocument();
  //   get input areas & btn
  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const colorInput = getByLabelText("Color");
  const submitBtn = queryByText("Create Box!");
  // fill out the form
  fireEvent.change(widthInput, { target: { value: 5 } });
  fireEvent.change(heightInput, { target: { value: 5 } });
  fireEvent.change(colorInput, { target: { value: "blue" } });
  //   submit form
  fireEvent.click(submitBtn);
  //   box exists - can delete
  expect(queryByText("X")).toBeInTheDocument();
  expect(queryByText("X").previousSibling).toHaveStyle(`
    width: 5em;
    height: 5em;
    background-color: blue;
  `);
});

it("can remove a box", () => {
  const { getByLabelText, queryByText } = render(<BoxList />);
  // add box
  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const colorInput = getByLabelText("Color");
  const submitBtn = queryByText("Create Box!");
  // fill out the form
  fireEvent.change(widthInput, { target: { value: 5 } });
  fireEvent.change(heightInput, { target: { value: 5 } });
  fireEvent.change(colorInput, { target: { value: "blue" } });
  //   submit form
  fireEvent.click(submitBtn);

  const deleteBtn = queryByText("X");
  expect(deleteBtn).toBeInTheDocument();

  //   delete the box
  fireEvent.click(deleteBtn);

  //   delete btn no longer exists
  expect(queryByText("X")).not.toBeInTheDocument();
});
