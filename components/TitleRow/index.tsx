import { useState } from "react";
import {AiOutlineTeam,AiOutlineUser} from "react-icons/ai"
import styles from "./TitleRow.module.css";
import {userProps} from "../../types/types"


type titleRowProps={
  data:string[]
}

const TitleRow = (props:titleRowProps) => {
  const values: string[] = ["Val1", "Val2", "val3", "val4"]

  return (
    <>
      <div
        key={0}
        className={styles.itemList}
      >
        <div className={styles.wrapperFull}>
          {props.data.map(item=>{
            return  (
            <div className={styles.rowItem}>
              <span>{item}</span>
            </div>)
          })}


        </div>
      </div>
      <div className={styles.divider}></div>
    </>
  );
};

export default TitleRow;
