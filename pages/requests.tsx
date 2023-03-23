import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { RequestListItem, TitleRow } from "../components";
import { Container, Section } from "../styles/requeststyles";
import { requestProps, activityProps } from "../types/types";
import { fetchRequests } from "./api/api";


const dummyActivities: activityProps[] = [
  {
    id: 1,
    request: null,
    user: null,
    complexity: 2
  },
  {
    id: 2,
    request: null,
    user: null,
    complexity: 2
  },
  {
    id: 3,
    request: null,
    user: null,
    complexity: 2
  }
]

const dummyData: requestProps[] = [
  {
    id: 1,
    name: "A",
    state: "FEITO",
    stateHistoryList: null,
    deliveryDate: "21/10/2022",
    hoursRequest: 50,
    activityList: dummyActivities
  },
  {
    id: 2,
    name: "A",
    state: "FEITO",
    stateHistoryList: null,
    deliveryDate: "21/10/2022",
    hoursRequest: 50,
    activityList: dummyActivities

  },
  {
    id:3,
    name: "A",
    state: "FEITO",
    stateHistoryList: null,
    deliveryDate: "21/10/2022",
    hoursRequest: 50,
    activityList: dummyActivities

  },
  {
    id: 4,
    name: "A",
    state: "FEITO",
    stateHistoryList: null,
    deliveryDate: "21/10/2022",
    hoursRequest: 50,
    activityList: dummyActivities

  },
];

const Requests: NextPage = () => {

  const [requestsList, setRequestsList] = useState<requestProps[]>([])

  useEffect(()=>{fetchRequests().then(data => setRequestsList(data))}, [])


  return (
    <>
      <Head>
        <title>Produtividade</title>
      </Head>

      <Container>
        <Section>
          <h1>Demandas</h1>
          <span>Gerenciar demandas</span>
          <TitleRow data={["Id", "Data", "Horas", ""]}/>

          {requestsList.map((item) => (
            <RequestListItem key= {item.id} data={item} />
          ))}
        </Section>
      </Container>
    </>
  );
};

export default Requests;
