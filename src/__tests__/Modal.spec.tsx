import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../shared/ui/Modal/Modal";
import "@testing-library/jest-dom";

describe("MyComponent", () => {
  it("render modal window in portal", () => {
    render(<Modal />);
    let windowModal = screen.queryByTestId("modal");
    expect(windowModal).toBeNull();

    const buttonModal = screen.getByTestId("modal-button");
    fireEvent.click(buttonModal);

    windowModal = screen.queryByTestId("modal");
    expect(windowModal).toBeInTheDocument();

    fireEvent.click(buttonModal);
    expect(windowModal).not.toBeInTheDocument();
  });
});
