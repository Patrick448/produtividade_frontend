import { useState } from "react";
import {AiOutlineTeam,AiOutlineUser} from "react-icons/ai"
import styles from "./ActivityListItem.module.css";
import {activityProps} from "../../types/types"


type activityListItemProps={
  data:activityProps
}

const ActivityListItem = (props:activityListItemProps) => {
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
            <span>{"Request ID"}</span>
          </div>
          <div className={styles.rowItem}>
            <span>
              {"UserID"}
            </span>
          </div>
          <div className={styles.rowItem}>
            <span>
              {props.data.complexity}
            </span>
          </div>
          <div className={styles.rowItem}>
          <span>
            </span>
            <AiOutlineUser color="#6d6d6d" />
          </div>


        </div>
      </div>
      <div className={styles.divider}></div>
    </>
  );
};

export default ActivityListItem;
