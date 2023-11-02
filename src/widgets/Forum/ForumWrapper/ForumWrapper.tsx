import { useState } from 'react';
import styles from "./ForumWrapper.module.scss";
import {setStyle} from "../../../utils/utils";
import {useTheme} from "../../../app/providers/ThemeProvide";
import { useGetAllTopicsQuery } from "../../../services/user/topic.api";
import TopicCard from "../TopicCard/TopicCard";
import { Pagination } from "../../../shared/index";

const ForumWrapper = () => {
  const {data = []} = useGetAllTopicsQuery();
  const {theme} = useTheme();

  const [current, setCurrent] = useState(1);

  const dataFilter = data.filter( (item: {}, index: number) => {
    if ( ((current - 1) * 10) <= index && index < (current * 10) ) return item;
  });

  function onPageChange(page: number) {
    setCurrent(page);
  }
  
  return (
    <div className={styles["container-margin"]} data-testid="forum" >
      <div className={styles.wrapper}>
        <div className={styles.wrapper__header}>
          <h4 className={styles.wrapper__title}>Форум</h4>
        </div>
        <div
          className={setStyle(
            theme,
            styles.topics,
            `${styles.topics} ${styles["topics-dark"]}`
          )}
        >
        {dataFilter && dataFilter.map(topic => (
          <TopicCard key={topic.id} {...topic} />
        ))}
        </div>
        <Pagination
          totalPages={data.length / 10}
          currentPage={current}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ForumWrapper;
