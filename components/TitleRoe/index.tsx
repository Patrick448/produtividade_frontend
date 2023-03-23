import { useState } from "react";
import {AiOutlineTeam,AiOutlineUser} from "react-icons/ai"
import styles from "./UserListItem.module.css";
import {userProps} from "../../types/types"


type userListItemProps={
  data:userProps
}

const UserListItem = (props:userListItemProps) => {
  const [active, setIsActive] = useState(false);

  function handleSetActive() {
    setIsActive(!active);
  }

  return (
    <>
      <div
        key={0}
        className={styles.itemList}
        onClick={() => handleSetActive()}
      >
        <div className={styles.wrapperFull}>
        <div className={styles.rowItem}>
            <span>{props.data.id}</span>
          </div>
          <div className={styles.rowItem}>
            <span>{props.data.name}</span>
          </div>
          <div className={styles.rowItem}>
            <span>
              {props.data.efficiency}
            </span>
          </div>
          <div className={styles.rowItem}>
          <span>
            </span>
            <AiOutlineTeam color="#6d6d6d" />
          </div>


        </div>
      </div>
      <div className={styles.divider}></div>
    </>
  );
};

export default UserListItem;
