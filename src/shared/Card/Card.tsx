import { FC } from "react";
import { CardProps } from "./info";

import styles from "./Card.module.scss";

const Card: FC<CardProps> = ({ data: { label, text } }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.label}>{label}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

Card.defaultProps = {
  data: {
    label: "Super Cool Project",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum, viverra.",
  },
};

export default Card;
