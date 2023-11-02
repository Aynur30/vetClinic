import { FC, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};

const modalRoot = document.getElementById("modal-root")!;

const PortalModal: FC<Props> = (props: Props) => {
  const { children } = props;
  const element = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  }, [element]);

  return createPortal(children, element);
};

export default PortalModal;
