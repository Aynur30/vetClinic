import { FC, useReducer } from "react";
import styles from "./Modal.module.scss";
import * as React from "react";

const initialState = {
  open: false,
};

const reducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return { ...state, open: !state.open };
    default:
      return state;
  }
};

type Props = {
  children?: React.ReactNode;
};

const Modal: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const typeOpen: string = "TOGGLE_MODAL";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onToggleModal = (event: any) => {
    if (event.target.className !== "_wrapModal_8l340_1") return;
    dispatch({ type: typeOpen });
  };

  const renderModal = state.open ? (
    <div
      data-testid="modal"
      className={styles.wrapModal}
      onClick={(event) => onToggleModal(event)}
    ></div>
  ) : null;

  return (
    <>
      {renderModal}
      <button
        data-testid="modal-button"
        style={{ width: "100px", height: "30px" }}
        onClick={() => dispatch({ type: typeOpen })}
      >
        {children}
      </button>
    </>
  );
};

export default Modal;
