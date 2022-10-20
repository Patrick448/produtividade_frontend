import { useState } from "react";
import {AiOutlineTeam,AiOutlineUser} from "react-icons/ai"
import { solutionCropProps } from "../../types/types";
import styles from "./RequestListItem.module.css";
import {requestProps} from "../../types/types"


type requestListItemProps={
  data:requestProps
}

const RequestListItem = (props:requestListItemProps) => {
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
            <span>{props.data.dataEntrega}</span>
          </div>

          <div className={styles.rowItem}>
            <span>{props.data.horaDemanda}</span>
          </div>

          <div className={styles.rowItem}>
            <span>{props.data.pesoComplexidade}</span>
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

export default RequestListItem;
