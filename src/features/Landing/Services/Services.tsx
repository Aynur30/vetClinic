import { useState } from "react";
import { setStyle } from "../../../utils/utils";
import { useTheme, Theme } from "../../../app/providers/ThemeProvide";
import { servicesNames } from "./info";
import cat from "../../../assets/images/cat-photo.png";
import styles from "./Services.module.scss";
import Button from "../../../shared/ui/Button/Button";

const Services = () => {
  const { theme } = useTheme();
  const [selectedService, setService] = useState(servicesNames[0]);
  const handleSetService = (id: number) => {
    setService(servicesNames[id - 1]);
  };

  const setContent = () => {
    if (selectedService.id === 1) {
      return styles["content-left"];
    } else if (selectedService.id === servicesNames.length) {
      return styles["content-right"];
    }
  };

  const styleBtn = {
    width: `318px`,
    backgroundColor: "#1676f3",
    color: "#FFFFFF",
    padding: "20px 20px",
    marginTop: "20px",
    borderRadius: "30px",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "27px",
  };
  const themeButton =
    theme === Theme.DARK
      ? {
          color: "#090909",
          backgroundColor: "#e9890c",
        }
      : undefined;
  const text = "ЗАПИСАТЬСЯ НА ПРИЕМ";

  return (
    <section className={styles.container}>
      <h1
        className={setStyle(
          theme,
          styles.heading,
          `${styles.heading} ${styles["inverse-heading"]}`
        )}
      >
        Услуги нашей клиники
      </h1>
      <div
        className={setStyle(
          theme,
          styles.text,
          `${styles.text} ${styles["inverse-heading"]}`
        )}
      >
        При каких симптомах нужно обратиться в наш ветеринарный центр
      </div>
      <div className={styles["container-info"]}>
        <ul
          className={setStyle(
            theme,
            styles.navigation,
            `${styles.navigation} ${styles["inverse-navigation"]}`
          )}
        >
          {servicesNames.map((service) => {
            return (
              <li
                className={
                  selectedService.id !== service.id
                    ? setStyle(
                        theme,
                        styles.service,
                        `${styles.service} ${styles["inverse-service"]}`
                      )
                    : setStyle(
                        theme,
                        styles["selected"],
                        styles["inverse-selected"]
                      )
                }
                onClick={() => handleSetService(service.id)}
                key={service.id}
              >
                <img src={service.iconUrl} className={styles["service-icon"]} />
                <div className={styles["service-name"]}>
                  {service.serviceName}
                </div>
              </li>
            );
          })}
        </ul>
        <div
          className={setStyle(
            theme,
            `${styles.content} ${setContent()}`,
            `${styles.content} ${styles["inverse-content"]} ${setContent()}`
          )}
        >
          <img src={cat} className={styles["content-image"]} />
          <div className={styles["content-info"]}>
            <div className={styles["content-info__name"]}>
              {selectedService.serviceName}
            </div>
            {selectedService.text
              ? selectedService.text.map((text, index) => {
                  return (
                    <p className={styles["content-info__text"]} key={index}>
                      {text}
                    </p>
                  );
                })
              : null}
            <Button styleBtn={styleBtn} text={text} theme={themeButton} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
