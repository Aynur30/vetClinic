import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Tooltip from "../shared/ui/Tooltip/Tooltip";

describe("Role", () => {
    it('should render component', () => {
        const children = [<div key="1">Child 1</div>, <div key="2">Child 2</div>];

        render(<Tooltip>{children}</Tooltip>)
        const element = screen.getByTestId("tooltip")
        expect(element).toBeInTheDocument()
    })
    it("should pass maxWidth to component", () => {
        const maxWidth = {maxWidth: "200px"};
        const children = [<div key="1">Child 1</div>, <div key="2">Child 2</div>];

        render(<Tooltip maxWidth={maxWidth}>{children}</Tooltip>);
        const tooltipElement = screen.getByTestId("tooltip");
        expect(tooltipElement).toHaveStyle( maxWidth );
      });
})