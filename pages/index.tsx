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
import { fetchCrops, postUserInput } from "./api/api";
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
    nome: "José",
    efficiency: 1.5,
    teamList: null,
    hourLogList: null,
  },
  {
    id: 2,
    nome: "João",
    efficiency: 1.5,
    teamList: null,
    hourLogList: null,
  },
  {
    id: 3,
    nome: "Maria",
    efficiency: 1.5,
    teamList: null,
    hourLogList: null,
  },
  {
    id: 4,
    nome: "Victor",
    efficiency: 1.5,
    teamList: null,
    hourLogList: null,
  },
  {
    id: 5,
    nome: "Moisés",
    efficiency: 1.5,
    teamList: null,
    hourLogList: null,
  },
  {
    id: 6,
    nome: "Helena",
    efficiency: 1.5,
    teamList: null,
    hourLogList: null,
  },
  
];

const Home: NextPage = () => {
  const [isOpenModalInvestimento, setIsOpenModalInvestimento] = useState(false);
  const [isOpenModalField, setIsOpenModalField] = useState(false);
  const [isOpenModalPlants, setIsOpenModalPlants] = useState(false);
  const [isOpenModalModelName, setIsOpenModalModelName] = useState(false);
  const [isOpenModalModelTimeFrames, setIsOpenModalTimeFrames] =
    useState(false);

  const router = useRouter();




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
          {dummyData.map(item=><UserListItem key= {item.id} data={item}/>)}
          
        </Section>
        <Button title="Otimizar" onClick={()=>{}} />
      </Container>
    </>
  );
};

export default Home;
