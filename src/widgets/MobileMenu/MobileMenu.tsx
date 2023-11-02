import { FC, useEffect, useState } from "react";
import { MobileMenuProps, authButtonInfo } from "./info";

import styles from "./MobileMenu.module.scss";
import Anchor from "../../shared/Anchor/Anchor";
import { AppLink } from "../../shared";
import Button from "../../shared/ui/Button/Button";

const MobileMenu: FC<MobileMenuProps> = ({
  isMoblieMenuShown,
  isHaveToken,
  linksInfo,
  close,
  setActive,
  isActive,
}) => {
  if (!isMoblieMenuShown) {
    return null;
  }

  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const handleClose = () => {
    setRendered(false);
    setTimeout(() => {
      close();
    }, 300);
  };

  const handleSetActive = (id: number) => {
    setActive(id)
    handleClose()
  };

  return (
    <div
      className={styles.container}
      style={{ transform: rendered ? "translateX(0%)" : "translateX(-100%)" }}
    >
      <div className={styles.profile}>
        <button className={styles["btn-back"]} onClick={handleClose}>
          назад
        </button>
        <div className={styles.auth}>
          <div className={styles.icon}></div>
          {!isHaveToken ? (
            <Button {...authButtonInfo} />
          ) : (
            <div className={styles.username}>Name</div>
          )}
        </div>
      </div>
      <ul className={styles["link-list"]}>
        {linksInfo.map((link) => {
          return (
            <li
              className={`${styles.listItem}${
                link.id === isActive ? ` ${styles.active}` : ""
              }`}
              key={link.id}
              onClick={() => handleSetActive(link.id)}
            >
              {link.to.includes("#") ? (
                <Anchor id={link.to} baseUrl="/">
                  <AppLink
                    to={link.to}
                    children={link.text}
                    className={styles.link}
                    role={link.role}
                  />
                </Anchor>
              ) : (
                <AppLink
                  to={link.to}
                  children={link.text}
                  className={styles.link}
                  role={link.role}
                  
                />
              )}
            </li>
          );
        })}
      </ul>
      <div className={styles["mobile-footer"]}>
        <button className={styles["btn-logout"]} onClick={handleClose}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
