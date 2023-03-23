import { useState } from "react";
import {AiOutlineTeam,AiOutlineUser} from "react-icons/ai"
import styles from "./TeamListItem.module.css";
import {teamProps} from "../../types/types"
import { TitleRow, UserListItem } from "..";


type teamListItemProps={
  data:teamProps,
  expands: boolean
}

const TeamListItem = (props:teamListItemProps) => {
  const [expanded, setIsExpanded] = useState(false);

  function hadleClickExpand() {
    setIsExpanded(!expanded);
  }


  const TeamEpanded = () =>{
    return (<>
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
          </span>
          <AiOutlineUser color="#6d6d6d" />
        </div>


      </div>
      </div>
        <div className={styles.expandedContainer}>
        <h3>{`${props.data.name} | Pessoas`}</h3>
        <TitleRow data={["Id", "Nome", "Eficiencia", ""]}/>
        {props.data.userList?.map((item)=><UserListItem expands={false} data={item}/>)}
        </div>
      <div>
    </div>
    <div className={styles.divider}></div>
  </>)
  }

  const TeamCollpsed = () =>{
    return (<>
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
          </span>
          <AiOutlineUser color="#6d6d6d" />
        </div>


      </div>
    </div>
    <div className={styles.divider}></div>
  </>)
  }


  return (
    <>{ expanded && props.expands ? <TeamEpanded/> : <TeamCollpsed/>}</>

  );
};

export default TeamListItem;
