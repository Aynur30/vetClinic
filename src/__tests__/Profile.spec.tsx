import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfilePageLayout from "../layout/ProfilePageLayout/ProfilePageLayout";
import { store } from "../app/store/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

describe("Profile", () => {
  it("Profile render", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProfilePageLayout />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });
});
