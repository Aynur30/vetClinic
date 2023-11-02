import AboutClinic from "./AboutClinic/AboutClinic";
import Feedback from "./Feedback/Feedback";
import Services from "./Services/Services";
import KindsOfAnimals from "./KindsOfAnimals/KindsOfAnimals";
import Appointment from "./Appointment/Appointment";
import ThemeSwitcher from "../../shared/ui/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "../../app/providers/ThemeProvide";
import { setStyle } from "../../utils/utils";
import { anchorPoints } from "../../shared/Anchor/anchorPoints";
import styles from "./Landing.module.scss";

const Landing = () => {
  const { doctors, procedures, about, contacts } = anchorPoints
  const { theme } = useTheme();
  return (
    <main className={styles["container-margin"]}>
      <div className={styles["container-centred"]}>
        
        <div className={styles["container-switcher"]}>
          <ThemeSwitcher />
        </div>
        <Appointment />
        <div
          className={setStyle(
            theme,
            styles.separator,
            styles["inverse-separator"]
          )}
          id={doctors}
        ></div>
        <KindsOfAnimals />
        <div
          className={setStyle(
            theme,
            styles.separator,
            styles["inverse-separator"]
          )}
          id={procedures}
        ></div>
        <Services />
        <div
          className={setStyle(
            theme,
            styles.separator,
            styles["inverse-separator"]
          )}
          id={about}
        ></div>
        <AboutClinic />
        <div
          className={setStyle(
            theme,
            styles.separator,
            styles["inverse-separator"]
          )}
          id={contacts}
        ></div>
        <Feedback />
      </div>
    </main>
  );
};

export default Landing;
