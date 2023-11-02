import Button from "../../../shared/ui/Button/Button";
import { Theme, useTheme } from "../../../app/providers/ThemeProvide";
import { setStyle } from "../../../utils/utils";
import styles from "./Appointment.module.scss";
import "../../../styles/variables.scss";

const Appointment = () => {
  const { theme } = useTheme();
  const styleBtn = {
    width: `318px`,
    backgroundColor: "#1676f3",
    color: "#FFFFFF",
    padding: '20px 20px',
    marginTop: "70px",
    borderRadius: "30px",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "27px",
  };
  const themeButton = theme === Theme.DARK ? {
    color: "#090909",
    backgroundColor: "#e9890c",
  }: undefined;
  const text = "ЗАПИСАТЬСЯ НА ПРИЕМ";

  return (
    <section className={styles.container}>
      <div className={styles['container-base']}>
        <h1 className={setStyle(theme, styles.text, `${styles.text} ${styles['inverse-text']}`)}>Мы заботимся о здоровье</h1>
        <p className={setStyle(theme, styles['text-selected'], `${styles['text-selected']} ${styles['inverse-text-selected']}`)}>ВАШИХ ПИТОМЦЕВ</p>
        <Button styleBtn={styleBtn} text={text}  theme={themeButton} />
      </div>
    </section>
  );
};

export default Appointment;
