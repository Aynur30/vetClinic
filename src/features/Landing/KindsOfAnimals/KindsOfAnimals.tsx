import styles from "./KindsOfAnimals.module.scss";
import { kindsOfAnimalsCards } from "./info";
import { setStyle } from "../../../utils/utils";
import { useTheme } from "../../../app/providers/ThemeProvide";

const KindsOfAnimals = () => {

  const {theme} = useTheme()

  return (
    <section className={styles.container}>
      <h1 className={setStyle(theme, styles.heading, `${styles.heading} ${styles['inverse-heading']}`)}>Работаем со всеми видами животных </h1>
      <ul className={styles.content}>
        {kindsOfAnimalsCards.map((card, index) => {
          return (
            <li className={setStyle(theme, `${styles.card} ${styles['card-animal']}`, `${styles.card} ${styles['card-animal']} ${styles['inverse-card-animal']}`)} key={card.id}>
              <div className={styles.name}>{card.kindOfAnimal}</div>
              <img src={card.imageUrl} className={styles.image}/>
              <div className={setStyle(theme, styles.index, `${styles.index} ${styles['inverse-index']}`)}>{`0${index+1}`}</div>
            </li>
          );
        })}
        <li className={setStyle(theme, `${styles.card} ${styles['card-info']}`, `${styles.card} ${styles['card-info']} ${styles['inverse-card-info']}`)}>Вызвать доктора на дом</li>
      </ul>
    </section>
  );
};

`${styles.card} ${styles['card-info']}`

export default KindsOfAnimals;
