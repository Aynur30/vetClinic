import iconDislike from '../../../assets/icons/dislike.png';
import {FC, useState} from 'react'
import iconLike from '../../../assets/icons/like.png';
import styles from './Likes.module.scss';
import { LikesType } from './Likes.type';
import { setLikes } from '../../../utils/utils';

const Likes: FC <LikesType> = (props: LikesType) => {
  const [likes, addLike] = useState<number>(props.likes)
  const [dislikes, addDislike] = useState<number>(props.dislikes)

  return (
    <div className={styles.likes_container}>
      <div className={styles.like}>
        <button onClick={() => {
          setLikes(likes, addLike, props.likes)}
          // api можно закинуть сюда
        }>
          <img src={iconLike}></img>
        </button>
        <span>{likes}</span>
      </div>
      <div className={styles.dislike}>
        <button onClick={() => {
          setLikes(dislikes, addDislike, props.dislikes)
          // api можно закинуть сюда
        }}>
          <img src={iconDislike}></img>
        </button>
        <span>{dislikes}</span>
      </div>
    </div>
  );
};

export default Likes;
