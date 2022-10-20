import type { NextPage } from "next";
import Head from "next/head";
import { RequestListItem } from "../components";
import { Container, Section } from "../styles/requeststyles";
import { requestProps } from "../types/types";

const dummyData: requestProps[] = [
  {
    id: 1,
    listaHistoricoEstado: null,
    dataEntrega: "21/10/2022",
    horaDemanda: 50,
    listaUsuario: null,
    pesoComplexidade: 1.5,
  },
  {
    id: 1,
    listaHistoricoEstado: null,
    dataEntrega: "21/10/2022",
    horaDemanda: 50,
    listaUsuario: null,
    pesoComplexidade: 1.5,
  },
  {
    id: 1,
    listaHistoricoEstado: null,
    dataEntrega: "21/10/2022",
    horaDemanda: 50,
    listaUsuario: null,
    pesoComplexidade: 1.5,
  },
  {
    id: 1,
    listaHistoricoEstado: null,
    dataEntrega: "21/10/2022",
    horaDemanda: 50,
    listaUsuario: null,
    pesoComplexidade: 1.5,
  },
];

const Requests: NextPage = () => {
  return (
    <>
      <Head>
        <title>Agriculture | Result Optimizer</title>
      </Head>

      <Container>
        <Section>
          <h1>Demandas</h1>
          <span>Gerenciar demandas</span>

          {dummyData.map((item) => (
            <RequestListItem data={item} />
          ))}
        </Section>
      </Container>
    </>
  );
};

export default Requests;
