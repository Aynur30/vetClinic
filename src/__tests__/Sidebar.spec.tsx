import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SidebarHeader from "../widgets/Sidebar/SidebarHeader/SidebarHeader";
describe("sidebar", () => {
  it("test", () => {
    render(<SidebarHeader text={"Ваши питомцы"} onClick={() => {}} />);
    const text = screen.getByText("Ваши питомцы");
    expect(text).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
