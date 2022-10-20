import { useState } from "react";
import {AiOutlineTeam,AiOutlineUser} from "react-icons/ai"
import {BiDownArrow, BiUpArrow} from "react-icons/bi"
import styles from "./RequestListItem.module.css";
import {requestProps} from "../../types/types"
import ActivityListItem from "../ActivityListItem";
import { TitleRow } from "..";


type requestListItemProps={
  data:requestProps
}

const RequestListItem = (props:requestListItemProps) => {
  const [expanded, setIsExpanded] = useState(false);

  function hadleClickExpand() {
    setIsExpanded(!expanded);
  }


  const RequestExpanded = () =>{

    return (
      <>
      <div
        key={0}
        className={styles.itemListExpanded}
        onClick={() => hadleClickExpand()}
      >
        <div className={styles.wrapperFull}>
        <div className={styles.rowItem}>
            <span>{props.data.id}</span>
          </div>
          <div className={styles.rowItem}>
            <span>{props.data.deliveryData}</span>
          </div>

          <div className={styles.rowItem}>
            <span>{props.data.hoursRequest}</span>
          </div>

          <div className={styles.rowItem}>
            <span>{props.data.complexity}</span>
          </div>

          <div className={styles.rowItem}>
          <span>
            </span>
            <BiUpArrow color="#6d6d6d" />
          </div>


        </div>
      </div>
        <div className={styles.expandedContainer}>
        <h3>{`Demanda ${props.data.id} | Atividades`}</h3>
        <TitleRow data={["Id", "Demanda", "Usuário", "Complexidade", ""]}/>
          {props.data.activitiesList.map((item)=><ActivityListItem data={item}/>)}
        </div>
        <h3>{`Ho ${props.data.id} | Atividades`}</h3>
      <div>

      </div>
      <div className={styles.divider}></div>

      
    </>
    )
  }

  const RequestCollapsed = ()=>{
    return (
      <>
        <div
          key={0}
          className={styles.itemList}
          onClick={() => hadleClickExpand()}
        >
          <div className={styles.wrapperFull}>
          <div className={styles.rowItem}>
              <span>{props.data.id}</span>
            </div>
            <div className={styles.rowItem}>
              <span>{props.data.deliveryData}</span>
            </div>
  
            <div className={styles.rowItem}>
              <span>{props.data.hoursRequest}</span>
            </div>
  
            <div className={styles.rowItem}>
              <span>{props.data.complexity}</span>
            </div>
  
            <div className={styles.rowItem}>
            <span>
              </span>
              <BiDownArrow color="#6d6d6d" />
            </div>
  
  
          </div>
        </div>
        <div className={styles.divider}></div>
      </>
    );

  }

  return (
 <>{ expanded ? <RequestExpanded/> : <RequestCollapsed/>}</>
  );
};

export default RequestListItem;
