import { FC } from "react";
import styles from "./SidebarHeader.module.scss";
import { useTheme } from "../../../app/providers/ThemeProvide";
import { setStyle } from "../../../utils/utils";
import { SidebarHeaderType } from "./SidebarHeaderType";

const SidebarHeader: FC<SidebarHeaderType> = (props: SidebarHeaderType) => {
  const { onClick, text } = props;
  const { theme } = useTheme();
  return (
    <div
      className={setStyle(
        theme,
        styles.sidebar_header,
        `${styles.sidebar_header} ${styles["inverse-background"]}`
      )}
    >
      <span className={styles.sidebar_header__text}>{text}</span>
      <button
        className={styles.sidebar_header__button}
        onClick={onClick}
      ></button>
    </div>
  );
};

export default SidebarHeader;
