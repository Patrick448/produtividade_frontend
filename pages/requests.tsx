import type { NextPage } from "next";
import Head from "next/head";
import { TeamListItem } from "../components";
import {Container, Section} from "../styles/requeststyles";
import {
  timeProps
} from "../types/types";

const Requests: NextPage = () => {
  return (
    <>
      <Head>
        <title>Agriculture | Result Optimizer</title>
      </Head>

      <Container>
        <Section>
          <h1>Demandas</h1>
          <span>
            Gerenciar demandas
          </span>
          

          <UserListItem/>
          <UserListItem/>
          <UserListItem/>

          </Section>
  
      </Container>
    </>
  );
};

export default Requests;
