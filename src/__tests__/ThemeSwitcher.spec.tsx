import { render, screen, fireEvent } from "@testing-library/react";
import ThemeSwitcher from "../shared/ui/ThemeSwitcher/ThemeSwitcher";
import "@testing-library/jest-dom";
import { ThemeProvider } from "../app/providers/ThemeProvide/ui/ThemeProvider";
import { Theme } from "../app/providers/ThemeProvide/lib/ThemeContext";

describe("ThemeSwitcher", () => {
  it("should render checkbox", () => {
    render(<ThemeSwitcher />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
  it("should click checkbox", () => {
    render(<ThemeSwitcher />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
  });
  it("should render label", () => {
    render(<ThemeSwitcher />);
    const label = screen.getByTestId("switcher");
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", checkbox.id);
  });

  it("ThemeSwitcher toggles theme when clicked", () => {
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    const switcher = screen.getByRole("checkbox") as HTMLInputElement;
    const savedTheme = localStorage.getItem("Theme");
    if (!savedTheme) {
      expect(switcher.checked).toBe(false);
    }
    if (savedTheme === Theme.LIGHT) {
      expect(switcher.checked).toBe(false);
    }
    if (savedTheme === Theme.DARK) {
      expect(switcher.checked).toBe(true);
    }
  });
});
