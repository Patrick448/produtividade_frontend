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
    nome: "Time X",
    listaUsuario: null,
  },
  {
    id: 2,
    nome: "Time A",
    listaUsuario: null,
  },
  {
    id: 3,
    nome: "Time B",
    listaUsuario: null,
  },
  {
    id: 4,
    nome: "Time C",
    listaUsuario: null,
  },
  {
    id: 5,
    nome: "Time D",
    listaUsuario: null,
  },
  {
    id: 6,
    nome: "Time E",
    listaUsuario: null,
  },
];

const Teams: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //setTimeout(() => setLoading(false), 3000);
  }, []);

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

          {dummyData.map((item) => (
            <TeamListItem key= {item.id} data={item} />
          ))}
        </Section>
      </Container>
    </>
  );
};

export default Teams;
