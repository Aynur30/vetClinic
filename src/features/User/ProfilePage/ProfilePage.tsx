import styles from "./ProfilePage.module.scss"
import ProfilePageLayout from '../../../layout/ProfilePageLayout/ProfilePageLayout';

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <ProfilePageLayout />
    </div>
  );
};

export default ProfilePage;
