import { useTheme } from "../../../app/providers/ThemeProvide";
import { setStyle } from "../../../utils/utils";
import image from "../../../assets/images/dog-photo.png";
import { facts } from "./info";
import styles from "./AboutClinic.module.scss";

const AboutClinic = () => {
  const { theme } = useTheme();
  return (
    <section className={styles.container}>
      <h1
        className={setStyle(
          theme,
          styles.heading,
          `${styles.heading} ${styles["inverse-heading"]}`
        )}
      >
        Ветеринарная клиника Слон в Краснодаре
      </h1>
      <p
        className={setStyle(
          theme,
          styles.about,
          `${styles.about} ${styles["inverse-heading"]}`
        )}
      >
        Первый филиал сети ветеринарных центров СЛОН открыл свои двери для
        владельцев и их питомцев в 2008 году в городе Сочи. На данный момент
        успешно работают и оказывают квалифицированные услуги 10 филиалов в
        городах Сочи и Краснодаре.
      </p>
      <p
        className={setStyle(
          theme,
          styles["history-name"],
          `${styles["history-name"]} ${styles["inverse-heading"]}`
        )}
      >
        История создания сети ветеринарных центров «СЛОН»
      </p>
      <p
        className={setStyle(
          theme,
          styles["history-text"],
          `${styles["history-text"]} ${styles["inverse-heading"]}`
        )}
      >
        Ветеринарная клиника Слон в Краснодаре - одна из ведущих и наиболее
        современных центров по оказанию помощи животным. ...
      </p>
      <button
        type={"button"}
        className={setStyle(
          theme,
          `${styles["history-text"]} ${styles["read-more"]}`,
          `${styles["history-text"]} ${styles["inverse-read-more"]}`
        )}
      >
        Читать далее
      </button>
      <ul className={styles["facts-container"]}>
        {facts.map((fact) => {
          return (
            <li className={styles.fact} key={fact.id}>
              <div
                className={setStyle(
                  theme,
                  styles["fact-numbers"],
                  styles["inverse-fact-numbers"]
                )}
              >
                {fact.numbers}
              </div>
              <div className={setStyle(
          theme,
          styles["fact-description"],
          `${styles["fact-description"]} ${styles["inverse-heading"]}`
        )}>{fact.text}</div>
            </li>
          );
        })}
      </ul>
      <img src={image} className={styles.image} />
    </section>
  );
};

export default AboutClinic;
