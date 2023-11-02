import {useState} from "react"
import { AppLink } from "../../shared";
import cat from "../../assets/images/Sweet-pets.png";
import styles from "./Header.module.scss";
import Button from "../../shared/ui/Button/Button";
import { useTheme, Theme } from "../../app/providers/ThemeProvide";
import {
  linksInfo,
  profileButtonStyle,
  profileButtonText,
  registerButtonStyle,
  registerButtonText,
  signInButtonStyle,
  signInButtonText,
  burgerButtonStyle,
  accountButtonStyle,
  accountButtonText,
} from "./info";
import Role from "../userRole/Role";
import { Link } from "react-router-dom";
import useWindowDimensions, { useAppSelector } from "../../hooks/hooks";
import { setStyle } from "../../utils/utils";
import MobileMenu from "../MobileMenu/MobileMenu";
import Anchor from "../../shared/Anchor/Anchor";

const Header = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 481;

  const [isMoblieMenuShown, setMoblieMenuShown] = useState(false);
  const openMobileMenu = () => {
    setMoblieMenuShown(true);
  };
  const closeMobileMenu = () => {
    setMoblieMenuShown(false);
  };
  const [isActive, setActive] = useState(1);
  const handleSetActive = (id: number) => setActive(id);
  const { theme } = useTheme();
  const isHaveToken = useAppSelector((state) => state.auth.jwtToken);

  const signInButtonTheme =
  theme === Theme.DARK
    ? {
        color: "#090909",
        backgroundColor: "#e9890c",
      }
    : undefined;

    const registerButtonTheme =
  theme === Theme.DARK
    ? {
        color: "#FFFFFF",
        backgroundColor: "#656a6e",
      }
    : undefined;

  return (
    <div className={setStyle(theme, styles["container-background"], `${styles["container-background"]} ${styles["container-background--dark"]}`)}>
      <div className={styles["container-margin"]}>
        <div className={styles["container-centred"]}>
          {!isMobile ? (
            <>
              <img className={styles.image} src={cat} />
              <nav>
                <ul className={styles.navigation}>
                  {linksInfo.map((link) => {
                    return (
                      <li
                        className={link.id === isActive ? styles.active : ""}
                        key={link.id}
                        onClick={() => handleSetActive(link.id)}
                      >
                        {link.to.includes("#")?
                        <Anchor baseUrl="/" id={link.to}>
                          <AppLink
                            to={link.to}
                            children={link.text}
                            className={styles.link}
                            role={link.role}
                          />
                        </Anchor>
                        :<AppLink
                            to={link.to}
                            children={link.text}
                            className={styles.link}
                            role={link.role}
                          />}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </>
          ) : (
            <MobileMenu
              isMoblieMenuShown={isMoblieMenuShown && isMobile}
              isHaveToken={isHaveToken}
              linksInfo={linksInfo}
              close={closeMobileMenu}
              setActive={setActive}
              isActive={isActive}
            />
          )}
          <div className={styles["buttons-container"]}>
            {!isMobile ? (
              <Link to={"/sign-in"} style={{ textDecoration: "none" }}>
                <Button
                  styleBtn={
                    !isHaveToken ? signInButtonStyle : profileButtonStyle
                  }
                  text={!isHaveToken ? signInButtonText : profileButtonText}
                  theme={signInButtonTheme}
                />
              </Link>
            ) : (
              <Button styleBtn={burgerButtonStyle} onClick={openMobileMenu} />
            )}
            {!isHaveToken ? (
              <Link to={"/sign-up"} style={{ textDecoration: "none" }}>
                <Button
                  styleBtn={
                    !isMobile ? registerButtonStyle : accountButtonStyle
                  }
                  text={!isMobile ? registerButtonText : accountButtonText}
                  theme={registerButtonTheme}
                />
              </Link>
            ) : (
              <div>
                <Role />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
