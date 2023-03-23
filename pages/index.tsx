import type { NextPage } from "next";
import Head from "next/head";
import {
  Button,
  Card,
  CardField,
  CardList,
  ModalField,
  Modal,
  ModalPlant,
  UserListItem,
  TitleRow,
} from "../components";

import { BsCurrencyDollar, BsFillCalendarRangeFill } from "react-icons/bs";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import { fetchUsers } from "./api/api";
import {
  userProps,
} from "../types/types";

import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import {
  ButtonCrop,
  ButtonField,
  Container,
  Section,
  WrapperColumn,
  WrapperRow,
} from "../styles/homestyles";


const dummyData: userProps[] = [
  {
    id: 1,
    name: "José",
    efficiency: 1.5,
    teamList: null,
    hourLogList: null,
  },
  {
    id: 2,
    name: "João",
    efficiency: 1.5,
    teamList: null,
    hourLogList: null,
  },
  {
    id: 3,
    name: "Maria",
    efficiency: 1.5,
    teamList: null,
    hourLogList: null,
  },
  {
    id: 4,
    name: "Victor",
    efficiency: 1.5,
    teamList: null,
    hourLogList: null,
  },
  {
    id: 5,
    name: "Moisés",
    efficiency: 1.5,
    teamList: null,
    hourLogList: null,
  },
  {
    id: 6,
    name: "Helena",
    efficiency: 1.5,
    teamList: null,
    hourLogList: null,
  },
  
];

const Home: NextPage = () => {
  const [userList, serUserList] = useState<userProps[]>([])
  const router = useRouter();

  useEffect(()=>{fetchUsers().then(data => serUserList(data))}, [])

  return (
    <>
      <Head>
        <title>Produtividade</title>
      </Head>



      <Container>
        <Section>
          <h1>Pessoas</h1>
          <span>Gerenciar pessoas</span>
          <TitleRow data={["Id", "Nome", "Eficiência", ""]}/>
          {userList.map(item=><UserListItem expands ={true}key= {item.id} data={item}/>)}
          
        </Section>
        <Button title="Otimizar" onClick={()=>{}} />
      </Container>
    </>
  );
};

export default Home;
