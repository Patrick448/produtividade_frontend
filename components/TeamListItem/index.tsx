import { useState } from "react";
import {AiOutlineTeam,AiOutlineUser} from "react-icons/ai"
import { solutionCropProps } from "../../types/types";
import styles from "./TeamListItem.module.css";
import {teamProps} from "../../types/types"


type teamListItemProps={
  data:teamProps
}

const TeamListItem = (props:teamListItemProps) => {
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
            <span>{props.data.nome}</span>
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

export default TeamListItem;
