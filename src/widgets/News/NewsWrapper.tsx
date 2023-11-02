import { FC } from "react";

import { useGetClientNewsQuery } from "../../services/client/clientNews.api";
import NewsWidget from "./NewsWidget";
import Button from "../../shared/ui/Button/Button";

import { buttonStyles } from "./info";

import styles from "./NewsWrapper.module.scss";
import salePlaceholder from "../../assets/images/widgetNewsSalePlaceholder.png";
import specOfferPlaceholder from "../../assets/images/widgetNewsSpecOfferPlaceholder.png";

const NewsWrapper: FC = () => {
  const { data } = useGetClientNewsQuery("");

  const UPDATING = (data || []).filter((item) => item.type === "UPDATING");
  const ADVERTISING_ACTIONS = (data || []).filter(
    (item) => item.type === "ADVERTISING_ACTIONS"
  );
  const DISCOUNTS = (data || []).filter((item) => item.type === "DISCOUNTS");
  const PROMOTION = (data || []).filter((item) => item.type === "PROMOTION");

  return (
    <div className={styles.container}>
      {UPDATING.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.label}>Новости</h3>
          {UPDATING.map((item) => (
            <NewsWidget {...item} published={true} />
          ))}
          <Button styleBtn={buttonStyles} text={"Show more..."}></Button>
        </section>
      )}
      {ADVERTISING_ACTIONS.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.label}>Акции</h3>
          {ADVERTISING_ACTIONS.map((item) => (
            <NewsWidget
              {...item}
              published={true}
              image={specOfferPlaceholder}
            />
          ))}
          <Button styleBtn={buttonStyles} text={"Show more..."}></Button>
        </section>
      )}
      {DISCOUNTS.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.label}>Скидки</h3>
          {DISCOUNTS.map((item) => (
            <NewsWidget {...item} published={true} image={salePlaceholder} />
          ))}
          <Button styleBtn={buttonStyles} text={"Show more..."}></Button>
        </section>
      )}
      {PROMOTION.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.label}>Промоакции</h3>
          {PROMOTION.map((item) => (
            <NewsWidget
              {...item}
              published={true}
              image={specOfferPlaceholder}
            />
          ))}
          <Button styleBtn={buttonStyles} text={"Show more..."}></Button>
        </section>
      )}
    </div>
  );
};

export default NewsWrapper;
