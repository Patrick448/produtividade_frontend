import type { NextPage } from "next";
import Head from "next/head";
import { RequestListItem, TitleRow } from "../components";
import { Container, Section } from "../styles/requeststyles";
import { requestProps, activityProps } from "../types/types";


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
    stateHistoryList: null,
    deliveryData: "21/10/2022",
    hoursRequest: 50,
    userList: null,
    complexity: 1.5,
    activitiesList: dummyActivities
  },
  {
    id: 2,
    stateHistoryList: null,
    deliveryData: "21/10/2022",
    hoursRequest: 50,
    userList: null,
    complexity: 1.5,
    activitiesList: dummyActivities

  },
  {
    id:3,
    stateHistoryList: null,
    deliveryData: "21/10/2022",
    hoursRequest: 50,
    userList: null,
    complexity: 1.5,
    activitiesList: dummyActivities

  },
  {
    id: 4,
    stateHistoryList: null,
    deliveryData: "21/10/2022",
    hoursRequest: 50,
    userList: null,
    complexity: 1.5,
    activitiesList: dummyActivities

  },
];

const Requests: NextPage = () => {
  return (
    <>
      <Head>
        <title>Produtividade</title>
      </Head>

      <Container>
        <Section>
          <h1>Demandas</h1>
          <span>Gerenciar demandas</span>
          <TitleRow data={["Id", "Data", "Horas", "Complexidade", ""]}/>

          {dummyData.map((item) => (
            <RequestListItem key= {item.id} data={item} />
          ))}
        </Section>
      </Container>
    </>
  );
};

export default Requests;
