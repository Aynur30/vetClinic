import React, { FC } from "react";
import styles from "./Tooltip.module.scss";

interface ITooltipProps {
  children: React.ReactNode[];
  maxWidth?: React.CSSProperties;
}

const Tooltip: FC<ITooltipProps> = ({children, maxWidth = {maxWidth: '150px'}}) => {
    
  return <div style={maxWidth} className={styles.container} data-testid={"tooltip"}>{children}</div>;
};

export default Tooltip;