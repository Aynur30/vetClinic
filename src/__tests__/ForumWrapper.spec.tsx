import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ForumWrapper from "../widgets/Forum/ForumWrapper/ForumWrapper";
import { Provider } from "react-redux";
import { store } from "../app/store/store";

describe("ForumWrapper", () => {
  it("ForumWrapper renders", () => {
    render(<Provider store={store}><ForumWrapper /></Provider>)
    expect(screen.getByTestId("forum")).toBeInTheDocument();
  });
});

