import TopicPageLayout from "../../layout/TopicPageLayout/TopicPageLayout";
import styles from './TopicPage.module.scss'

const TopicPage = () => {
    const { container } = styles;

    return (
      <div className={container}>
        <TopicPageLayout />
      </div>
    );
  };
  
  export default TopicPage;