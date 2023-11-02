import { setStyle } from "../../../utils/utils";
import { useTheme, Theme } from "../../../app/providers/ThemeProvide";
import image from "../../../assets/images/doctor-image.png";
import styles from "./Feedback.module.scss";
import TextInput from "../../../shared/ui/Inputs/TextInput";
import CheckBoxInput from "../../../shared/ui/Inputs/CheckBoxInput";
import Button from "../../../shared/ui/Button/Button";

const Feedback = () => {
  const { theme } = useTheme();
  const styleBtn = {
    width: `230px`,
    backgroundColor: "#1676f3",
    color: "#FFFFFF",
    padding: "20px 20px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
    lineHeight: "17px",
  };
  const themeButton =
    theme === Theme.DARK
      ? {
          color: "#090909",
          backgroundColor: "#e9890c",
        }
      : undefined;
  const text = "ЗАПИСАТЬСЯ ОНЛАЙН";

  return (
    <section className={styles.container}>
      <div
        className={setStyle(
          theme,
          styles["container-background"],
          `${styles["container-background"]} ${styles["inverse-background"]}`
        )}
      >
        <h1
          className={setStyle(
            theme,
            styles.heading,
            `${styles.heading} ${styles["inverse-heading"]}`
          )}
        >
          Остались вопросы?
        </h1>
        <p
          className={setStyle(
            theme,
            styles.text,
            `${styles.text} ${styles["inverse-heading"]}`
          )}
        >
          Заполните форму и администратор свяжется с вами в течение 5 минут
        </p>
        <div
          className={setStyle(
            theme,
            styles.circle,
            `${styles.circle} ${styles["inverse-circle"]}`
          )}
        ></div>
        <form
          className={setStyle(
            theme,
            styles.form,
            `${styles.form} ${styles["inverse-form"]}`
          )}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2
            className={setStyle(
              theme,
              styles["form-heading"],
              `${styles["form-heading"]} ${styles["inverse-form-heading"]}`
            )}
          >
            Введите ваши данные
          </h2>
          <img src={image} className={styles.image} />
          <TextInput
            name={"name"}
            label={""}
            placeholder={"Укажите ваше имя*"}
          />
          <TextInput
            name={"phone"}
            label={""}
            placeholder={"Укажите ваштелефон*"}
          />
          <div className={styles["checkbox-container"]}>
            <CheckBoxInput name={"confirm"} label={""} />
            <label
              className={setStyle(
                theme,
                styles["checkbox-label"],
                `${styles["checkbox-label"]} ${styles["inverse-checkbox-label"]}`
              )}
            >
              Я согласен на обработку моих персональных данных
            </label>
          </div>

          <Button styleBtn={styleBtn} text={text} theme={themeButton} />
        </form>
      </div>
    </section>
  );
};

export default Feedback;
