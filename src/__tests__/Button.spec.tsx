import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../shared/ui/Button/Button";
import "@testing-library/jest-dom";

describe("MyComponent", () => {
  const onClick = jest.fn();
  it("render modal window in portal", () => {
      render(<Button onClick={() => onClick()} text="BTN"/>)  
      const btn = screen.getByText('BTN');
      expect(btn).toBeInTheDocument();
      fireEvent.click(btn);
      expect(onClick).toBeCalled();
  });
});