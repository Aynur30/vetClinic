import { useState } from "react";
import Tooltip from "../../shared/ui/Tooltip/Tooltip";
import { infoTooltip } from "./info";
import bell from "../../assets/icons/Bell.svg";
import whiteBell from "../../assets/icons/Bell-white.svg"
import avatarDefault from "../../assets/icons/avatr-default.svg";
import { IUserResponce } from "../../types/auth/authenticationDTO";
import { prepareText } from "../../utils/utils";
import { useSelector } from "react-redux";
import { imgError } from "../../utils/utils";
import { useGetAllUserNotificationsQuery } from "../../services/user/userNotificationController.api";
import styles from "./Role.module.scss";
import useWindowDimensions from "../../hooks/hooks";
import { Link } from "react-router-dom";
import {useLogout} from "../../hooks/useLogout";

const Role = () => {
  const {width} = useWindowDimensions()
  const isMobile = width < 481

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(!isOpen);
    }
  };

  const { role } = useSelector((state: { auth: IUserResponce }) => state.auth);
  const { data = [] } = useGetAllUserNotificationsQuery({}, {});
  
  const { enableLogout } = useLogout();

  const goProfileOrLogout = async (label: string) => {
    if (label === 'Выйти') {
      await enableLogout();
    }
    setIsOpen(!isOpen);
  }

  const tooltip = isOpen ? (
    <div
      className={styles["tooltip-container"]}
      onMouseLeave={() => handleOpen()}
    >
      <Tooltip>
        {infoTooltip.map((item) => {
          return (
            <Link to={item.path} key={item.id} style={ item.id === 1 ? {color: '#d9d9d9'} : {color: '#e8454d'} }>
              <div className={styles["info-container"]}>
                <img className={styles.icon} src={item.pathToIcon} />
                <div className={styles.text} onClick={() => goProfileOrLogout(item.label)}>{item.label}</div>
              </div>
            </Link>
          );
        })}
      </Tooltip>
    </div>
  ) : null;
  return (
    <div className={styles.container} data-testid={"role"}>
      <div
        className={
          data.length
            ? `${styles.notification} ${styles["have-notifications"]}`
            : styles.notification
        }
      >
        <img className={styles["notification__image"]} src={isMobile?whiteBell:bell} />
      </div>
      <div className={styles.separator}></div>
      <button
        type={"button"}
        data-testid={"button"}
        className={isOpen ? `${styles.role} ${styles.clicked}` : styles.role}
        onClick={() => handleOpen()}
        onKeyDown={handleKeyDown}
      >
        <div>Role</div>
        <div className={styles["role-text"]}>{role ? prepareText(role): 'unknown' }</div>
      </button>

      <img
        className={styles.avatar}
        src={avatarDefault}
        onError={(e) => imgError(e, avatarDefault)}
      />
      {tooltip}
    </div>
  );
};

export default Role;
