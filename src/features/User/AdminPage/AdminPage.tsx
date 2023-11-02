import styles from "./AdminPage.module.scss";
import AdminPageLayout from "../../../layout/AdminPageLayout/AdminPageLayout";

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <AdminPageLayout />
    </div>
  );
};

export default AdminPage;
