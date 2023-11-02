import { fireEvent, render, screen } from '@testing-library/react';
import Likes from "../shared/ui/Likes/Likes";
import "@testing-library/jest-dom";

describe("CommentCard", () => {
  it("render modal window in portal", () => {
     render(<Likes id={1}  likes={5} dislikes={6} />)  
    const btns = screen.getAllByRole('button')
    btns.forEach(item => {
      fireEvent.click(item);
    })
  });
});