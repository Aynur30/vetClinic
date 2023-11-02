import { render } from "@testing-library/react";
import CommentCard from "../widgets/Forum/CommentCard/CommentCard";
import "@testing-library/jest-dom";

describe("CommentCard", () => {
  it("render modal window in portal", () => {
      const { getByTestId } = render(<CommentCard isTopic={false} id={1} content="Some content" dateTime={new Date()} likes={5} dislike={6} userInfoDto={{id: 2, email: "email@mail.com", firstname: 'bob', lastname: 'op'}}/>)  
      const commentCard = getByTestId('comment_card')
      expect(commentCard).toBeInTheDocument();
      const userImage = getByTestId('user_image')
      expect(userImage).toBeInTheDocument();
      const userLink = getByTestId('user_link')
      expect(userLink).toBeInTheDocument();
      expect(userLink).toHaveAttribute('href');
      const date = getByTestId('date')
      expect(date).toBeInTheDocument();
      const content = getByTestId('content')
      expect(content).toBeInTheDocument();
      const likes = getByTestId('likes_component')
      expect(likes).toBeInTheDocument();
  });
});