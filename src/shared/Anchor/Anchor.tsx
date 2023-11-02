import { FC, SyntheticEvent } from "react";
import { AnchorProps } from "./info";
import { useLocation, useNavigate } from "react-router-dom";

const Anchor: FC<AnchorProps> = ({ children, id, baseUrl }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  
  const handleScroll = (e: SyntheticEvent) => {
    e.preventDefault();
    if (pathname!==baseUrl) navigate(baseUrl)
    let id = e.currentTarget.id;
    let position = document.getElementById(id.slice(1, id.length));
    position && position.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  return (
    <div onClick={handleScroll} id={id}>
      {children}
    </div>
  );
};

export default Anchor;
