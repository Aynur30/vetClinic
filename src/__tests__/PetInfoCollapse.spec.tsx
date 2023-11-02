import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PetInfoCollapse from "../widgets/PetInfoCollapse/PetInfoCollapse";

const data = [
  {
    name: "Pet 1",
    description: [
      {
        label: "label 1",
        value: "value 1",
      },
      {
        label: "label 2",
        value: "value 2",
      },
      {
        label: "label 3",
        value: "value 3",
      },
    ],
  },
  {
    name: "Pet 2",
    description: [
      {
        label: "label 1",
        value: "value 1",
      },
      {
        label: "label 2",
        value: "value 2",
      },
      {
        label: "label 3",
        value: "value 3",
      },
    ],
  },
];

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("PetInfoCollapse", () => {
  it("PetInfoCollapse renders", () => {
    render(<PetInfoCollapse data={data} />);
    expect(screen.getByText("Pet 1")).toBeInTheDocument();
  });

  it("dynamic styles works", () => {
    render(<PetInfoCollapse data={data} />);
    const arrows = screen.getAllByRole("img");
    arrows.forEach((arrow, index) => {
      if (index === 0) {
        const collapseHeader = arrow.parentElement?.parentElement!;
        const collapseItem = collapseHeader.parentElement;
        fireEvent.click(collapseHeader);
        expect(collapseItem).toHaveClass("ant-collapse-item-active");
      }
    });
  });
});
