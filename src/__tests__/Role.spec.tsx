import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Role from "../widgets/userRole/Role";
import { store } from "../app/store/store";
import { Provider } from "react-redux";

describe("Role", () => {
  it("Should render component", () => {
    render(
      <Provider store={store}>
        <Role />
      </Provider>
    );
    const element = screen.getByTestId("role");
    expect(element).toBeInTheDocument();
  });
});
