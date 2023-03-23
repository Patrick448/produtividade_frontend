import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, CardResult, TeamListItem, TitleRow } from "../components";
import { Section } from "../styles/homestyles";
import {
  Container,
  WrapperColumn,
  WrapperGrid,
  WrapperLoading,
} from "../styles/resultstyles";
import { teamProps } from "../types/types";
import { fetchTeams } from "./api/api";

type cropTypes = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
  profit: number;
  time: number;
};

type fieldTypes = {
  id: number;
  size: number;
  name: string;
};

type solutionCropTypes = {
  id: number;
  amount: number;
  crop: cropTypes;
  price: number;
  cost: number;
  space: number;
  time: number;
  field: fieldTypes;
  timeFrame: number;
};

type inputDataTypes = {
  id: number;
  budget: number;
  space: number;
  timeFrames: number;
};

export type dataTypes = {
  id: number;
  solutionCrops: solutionCropTypes[];
  inputData: inputDataTypes;
  fields: fieldTypes[];
};

const dummyData: teamProps[] = [
  {
    id: 1,
    name: "Time X",
    userList: null,
  },
  {
    id: 2,
    name: "Time A",
    userList: null,
  },
  {
    id: 3,
    name: "Time B",
    userList: null,
  },
  {
    id: 4,
    name: "Time C",
    userList: null,
  },
  {
    id: 5,
    name: "Time D",
    userList: null,
  },
  {
    id: 6,
    name: "Time E",
    userList: null,
  },
];

const Teams: NextPage = () => {
  const [teamsList, serTeamsList] = useState<teamProps[]>([])

  useEffect(()=>{fetchTeams().then(data => serTeamsList(data))}, [])


  return (
    <>
      <Head>
        <title>Produtividade</title>
      </Head>

      <Container>
        <Section>
          <h1>Times</h1>
          <span>Gerenciar times</span>
          <TitleRow data={["Id", "Nome",  ""]}/>

          {teamsList.map((item) => (
            <TeamListItem expands={true} key= {item.id} data={item} />
          ))}
        </Section>
      </Container>
    </>
  );
};

export default Teams;
