import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { solutionCropProps } from "../../types/types";
import styles from "./SolutionCropItemList.module.css";

type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
};

type itemListProps = {
  data: solutionCropProps;
};

const UserListItem = () => {
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
            <span>{"José"}</span>
          </div>
          <div className={styles.rowItem}>
            <AiOutlineArrowUp color="#2FC52C" />
            <span>
              {2}
            </span>
          </div>
          <div className={styles.rowItem}>
            <AiOutlineArrowDown color="#EF1818" />
            <span>
              {3}
            </span>
          </div>

          <div className={styles.rowItem}>
            <span>
              {4}
            </span>
          </div>

          <div className={styles.rowItem}>
            <span>{"X"}</span>
          </div>

          <div className={styles.rowItem}>
            <span>{5}</span>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
    </>
  );
};

export default UserListItem;
