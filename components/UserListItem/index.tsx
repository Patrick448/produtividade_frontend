import { useState } from "react";
import {AiOutlineTeam,AiOutlineUser} from "react-icons/ai"
import {BiDownArrow,BiUpArrow} from "react-icons/bi"

import styles from "./UserListItem.module.css";
import {userProps} from "../../types/types"
import { TeamListItem, TitleRow } from "..";


type userListItemProps={
  data: userProps,
  expands: boolean
}

const UserListItem = (props:userListItemProps) => {
  const [expanded, setIsExpanded] = useState(false);

  function hadleClickExpand() {
    setIsExpanded(!expanded);
  }

  const UserExpanded = () =>{
    return(<>
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
          <BiUpArrow color="#6d6d6d" />
        </div>


      </div>

      </div>
        <div className={styles.expandedContainer}>
        <h3>{`Usuário ${props.data.id} | Times`}</h3>
        <TitleRow data={["Id", "Nome", ""]}/>
        {props.data.teamList?.map((item)=><TeamListItem expands={false} data={item}/>)}

        </div>
      <div>
    </div>
    <div className={styles.divider}></div>
  </>)

  }

  const UserCollapsed = () =>{
    return(
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
           { props.expands? <BiDownArrow color="#6d6d6d" />: ""}
          </div>


        </div>
      </div>
      <div className={styles.divider}></div>
    </>)
    
  }


  return (
    <>{ expanded && props.expands ? <UserExpanded/> : <UserCollapsed/>}</>

  );
};

export default UserListItem;
