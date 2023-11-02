import {FC} from "react";
import {ITopic} from "./info";
import {useTheme} from "../../../app/providers/ThemeProvide";
import {convertTopicDate, setStyle} from "../../../utils/utils";
import { useSelector } from "react-redux";
import { IUserResponce } from "../../../types/auth/authenticationDTO";
import avatar from "../../../assets/icons/pet-avatar-default.svg";
import calendar from "../../../assets/icons/calendar.svg";
import comments from "../../../assets/icons/comments.svg";
import styles from "./TopicCard.module.scss";
import Button from "../../../shared/ui/Button/Button";
import { AppLink } from "../../../shared";

const TopicCard: FC<ITopic> = (props: ITopic) => {
  const {title, content, topicStarter, lastUpdateDate, commentDtoList, id} = props;
  
  const { role } = useSelector((state: { auth: IUserResponce }) => state.auth);
  const {theme} = useTheme();
  const date = convertTopicDate(lastUpdateDate);

  return (
    <div className={styles.wrapper}>
      <div
        data-testid={"topic"}
        className={setStyle(
          theme,
          styles.container,
          `${styles.container} ${styles.container__dark} ${styles.text__dark}  `
        )}
      >
        <div className={styles.content}>
          <h4 className={styles.title}>
            <AppLink to={`${id}`} role="link" >
              {title}
            </AppLink></h4>
          <p className={styles.text}>{content}</p>
        </div>
        <div className={styles["topic-info"]}>
          <div className={`${styles.text} ${styles["topic-info__wrapper"]}`}>
            <img className={styles["topic-image"]} src={avatar} />
            <span>{`${topicStarter.firstname} ${topicStarter.lastname}`}</span>
          </div>
          <div className={`${styles.text} ${styles["topic-info__wrapper"]}`}>
            <img className={styles["topic-image"]} src={calendar} />
            <span>{date}</span>
          </div>
          <div className={`${styles.text} ${styles["topic-info__wrapper"]}`}>
            <img className={styles["topic-image"]} src={comments} />
            <span>{commentDtoList.length}</span>
          </div>
        </div>
      </div>
      {role === "ADMIN" && 
        <div className={styles.buttons}>
          <div className={styles.buttons__row}>
            <Button addClass={styles.buttons__item} text={'Open'} styleBtn={{backgroundColor: '#FFFFFF', color: '#000000'}}/>
            <Button addClass={styles.buttons__item} text={'Close'} styleBtn={{backgroundColor: '#000000', color: '#FFFFFF'}}/>
          </div>
          <div className={styles.buttons__row}>
            <Button addClass={styles.buttons__item} text={'Edit'} styleBtn={{backgroundColor: '#5496D4', color: '#FFFFFF'}}/>
            <Button addClass={styles.buttons__item} text={'Delete'} styleBtn={{backgroundColor: '#E8454D', color: '#FFFFFF'}}/>
          </div>
        </div>
      }
    </div>
  );
};

export default TopicCard;