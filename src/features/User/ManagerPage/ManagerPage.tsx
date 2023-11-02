import styles from "./ManagerPage.module.scss";
import {Outlet, useNavigate} from "react-router-dom";
import { panelLinksInfo } from "./info";

const ManagerPage = () => {
    
    const navigate = useNavigate();

    function followLink(to: string) {
        navigate(`${to}`, { replace: true });
    }
    
    return(
        <div className={styles.container}>
            <aside className={styles["panel"]}>
                <ul className={styles["panel-list"]}>
                    {panelLinksInfo.map((item) => {
                        return (
                            <li key={item.id} onClick={() => followLink(item.to)}>{item.text}</li>
                        )
                    })}
                </ul>
            </aside>
            <section className={styles["content"]}> <Outlet /> </section>
        </div>
    )
}

export default ManagerPage;
