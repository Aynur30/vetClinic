import styles from "./ClientPage.module.scss"
import ClientPageLayout from '../../../layout/ClientPageLayout/ClientPageLayout';
const ClientPage = () => {
  return (
    <div className={styles.container}>
      <ClientPageLayout/>
    </div>
  );
};

export default ClientPage
