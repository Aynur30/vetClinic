import { FC } from 'react'
import { IManagerNews } from './info'
import styles from './ManagerNews.module.scss'
import Button from '../../../shared/ui/Button/Button'
import iconEdit from '../../../assets/icons/iconButtonEdit.png'
import iconDelete from '../../../assets/icons/iconDeleteButton.png'

const ManagerNews: FC<IManagerNews> = (props: IManagerNews) => {
  const { importance, id, type, exp, status, title, content } = props;

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <ul className={styles.info}>
          <li className={styles.info__item}>{importance}</li>
          <li className={styles.info__item}>ID: {id}</li>
          <li className={styles.info__item}>Тип: {type}</li>
          <li className={styles.info__item}>Срок годности: до {exp}</li>
          <li className={styles.info__item}>Статус: {status}</li>
        </ul>
        <div className={styles.buttons}>
          <div className={styles['button-box']}>
            <Button addClass={styles.buttons__item} image={iconEdit} styleBtn={{backgroundColor: '#FFFFFF', color: 'black', border: '2px solid black'}}/>
            <Button addClass={styles.buttons__item} image={iconDelete} styleBtn={{backgroundColor: '#E8454D'}}/>
          </div>
          <Button addClass={styles.buttons__item} text={'Снять с публикации'} styleBtn={{backgroundColor: '#AB8DFF', color: '#FFFFFF'}} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content__title}>{title}</div>
        <span className={styles.content__text}>{content}</span>
      </div>
    </div>
  )
}

export default ManagerNews;