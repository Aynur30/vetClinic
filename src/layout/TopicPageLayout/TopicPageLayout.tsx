import {useParams} from 'react-router-dom';
import {useGetTopicQuery} from '../../services/user/topic.api';
import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs';
import CommentCard from '../../widgets/Forum/CommentCard/CommentCard';
import styles from './TopicPageLayout.module.scss'
import {convertTopicDate} from '../../utils/utils';
import UserComment from "../../widgets/UserComment/UserComment";
import {useAppSelector} from "../../hooks/hooks";

const TopicPageLayout = () => {
  const {wrapper, container, titles, author, name, topic_date, comment_wrapper, commentForm} = styles;

  const {id} = useParams();
  const topicId = id ? parseInt(id, 10) : 0
  const {data} = useGetTopicQuery(topicId);
  const {jwtToken} = useAppSelector(state => state.auth)

  if (data) {
    const comments = data.commentDtoList;

    const {title, lastUpdateDate, topicStarter, content} = data;
    const formattedDate = convertTopicDate(lastUpdateDate);

    return (
      <div className={wrapper}>
        <Breadcrumbs/>
        <div className={container}>
          <div className={titles}>{title}</div>
          <div className={author}>
            <div className={name}>{`${topicStarter.firstname} ${topicStarter.lastname}`}</div>
            <div className={topic_date}>{formattedDate}</div>
          </div>
          <div className={comment_wrapper}>
            <CommentCard
              isTopic={true}
              id={topicId}
              content={content}
              dateTime={lastUpdateDate}
              likes={0}
              dislike={0}
              userInfoDto={{
                id: topicStarter.id,
                email: topicStarter.email,
                firstname: topicStarter.firstname,
                lastname: topicStarter.lastname
              }}/>
            {comments.map(comment => (
              <CommentCard isTopic={false} key={comment.id} {...comment} />
            ))}
          </div>
          {Boolean(jwtToken) && <div className={commentForm}>
              <UserComment id={topicId}/>
          </div>}
        </div>
      </div>

    )
  }

}

export default TopicPageLayout;