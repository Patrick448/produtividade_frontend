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
} from "../components";

import { BsCurrencyDollar, BsFillCalendarRangeFill } from "react-icons/bs";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import { fetchCrops, postUserInput } from "./api/api";
import {
  inputDataProps,
  fieldProps,
  cropProps,
  usuarioProps,
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

type dataProps = {
  investiment: number | null;
  fields: fieldProps[];
  plants: cropProps[];
  timeFrames: number | null;
  modelName: string;
};

const dummyData: usuarioProps[] = [
  {
    id: 1,
    nome: "José",
    pesoEficiencia: 1.5,
    listaTime: null,
    listaRelatorioHora: null,
  },
  {
    id: 1,
    nome: "João",
    pesoEficiencia: 1.5,
    listaTime: null,
    listaRelatorioHora: null,
  },
  {
    id: 1,
    nome: "Maria",
    pesoEficiencia: 1.5,
    listaTime: null,
    listaRelatorioHora: null,
  },
  {
    id: 1,
    nome: "Victor",
    pesoEficiencia: 1.5,
    listaTime: null,
    listaRelatorioHora: null,
  },
  {
    id: 1,
    nome: "Moisés",
    pesoEficiencia: 1.5,
    listaTime: null,
    listaRelatorioHora: null,
  },
  {
    id: 1,
    nome: "Helena",
    pesoEficiencia: 1.5,
    listaTime: null,
    listaRelatorioHora: null,
  },
  
];

const Home: NextPage = () => {
  const [isOpenModalInvestimento, setIsOpenModalInvestimento] = useState(false);
  const [isOpenModalField, setIsOpenModalField] = useState(false);
  const [isOpenModalPlants, setIsOpenModalPlants] = useState(false);
  const [isOpenModalModelName, setIsOpenModalModelName] = useState(false);
  const [isOpenModalModelTimeFrames, setIsOpenModalTimeFrames] =
    useState(false);
  const [crops, setCrops] = useState<cropProps[]>();

  const router = useRouter();

  const [data, setData] = useState<dataProps>({
    fields: [],
    investiment: null,
    plants: [],
    timeFrames: null,
    modelName: "",
  } as dataProps);

  console.log(data);

  useEffect(() => {
    fetchCrops().then((data) => {
      setCrops(data);
    });
  }, []);

  function handleRemoveField(id: number) {
    const indexOfObject = data.fields.findIndex((object) => {
      return object.id === id;
    });

    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: data.fields.splice(indexOfObject, 1),
      plants: [...prevData.plants],
      timeFrames: null,
      modelName: "",
    }));
  }

  function handleOptimizeClick() {
    const inputData: inputDataProps = {
      budget: data.investiment!,
      space: 0,
      id: null,
      selectedCrops: data.plants,
      fields: data.fields,
      timeFrames: data.timeFrames!,
    };
    postUserInput(inputData)
      .then((res) => {
        router.push({
          pathname: "result",
          query: {
            id: res.id,
          },
        });
      })
      .catch(() => alert("erro"));
  }

  function syncFields(newData: fieldProps) {
    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: [...prevData.fields, newData],
      plants: [...prevData.plants],
      timeFrames: prevData.timeFrames,
      modelName: "",
    }));
  }

  function syncInvestiment(newInvestiment: string) {
    setData((prevData) => ({
      investiment: parseInt(newInvestiment),
      fields: [...prevData.fields],
      plants: [...prevData.plants],
      timeFrames: prevData.timeFrames,
      modelName: "",
    }));
  }

  function syncPlant() {
    const plantsActive = crops?.filter((item: cropProps) => item.isActive);

    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: [...prevData.fields],
      plants: plantsActive!,
      timeFrames: prevData.timeFrames,
      modelName: "",
    }));
  }

  function syncTimesFrame(newTime: string) {
    const plantsActive = crops?.filter((item: cropProps) => item.isActive);

    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: [...prevData.fields],
      plants: plantsActive!,
      timeFrames: parseInt(newTime),
      modelName: prevData.modelName,
    }));
  }

  function syncModelName(newNameModel: string) {
    const plantsActive = crops?.filter((item: cropProps) => item.isActive);

    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: [...prevData.fields],
      plants: plantsActive!,
      timeFrames: prevData.timeFrames,
      modelName: newNameModel,
    }));
  }

  console.log(data);

  function onChangeModelName() {
    setIsOpenModalModelName(!isOpenModalModelName);
  }

  function onChangeModalInvestiment() {
    setIsOpenModalInvestimento(!isOpenModalInvestimento);
  }

  function onChangeModalTimeFrames() {
    setIsOpenModalTimeFrames(!isOpenModalModelTimeFrames);
  }

  function onChangeModalField() {
    setIsOpenModalField(!isOpenModalField);
  }

  function onChangeModalPlants() {
    setIsOpenModalPlants(!isOpenModalPlants);
  }

  return (
    <>
      <Head>
        <title>Agriculture | Create Farm</title>
      </Head>
      {isOpenModalModelName && (
        <Modal
          title="Modelo"
          inputName="Nome"
          setIsOpen={setIsOpenModalModelName}
          syncData={syncModelName}
        />
      )}
      {isOpenModalInvestimento && (
        <Modal
          title="Investimento"
          inputName="Valor"
          setIsOpen={setIsOpenModalInvestimento}
          syncData={syncInvestiment}
        />
      )}

      {isOpenModalModelTimeFrames && (
        <Modal
          title="Planejamento"
          inputName="Tempo"
          setIsOpen={setIsOpenModalTimeFrames}
          syncData={syncTimesFrame}
        />
      )}
      {isOpenModalField && (
        <ModalField
          setIsOpen={setIsOpenModalField}
          syncDataField={syncFields}
        />
      )}
      {isOpenModalPlants && (
        <ModalPlant
          setIsOpen={setIsOpenModalPlants}
          listPlants={crops!}
          syncPlant={syncPlant}
        />
      )}

      <Container>
        <Section>
          <h1>Pessoas</h1>
          <span>Gerenciar pessoas</span>

          {dummyData.map(item=><UserListItem data={item}/>)}
          


        </Section>
        <Button title="Otimizar" onClick={handleOptimizeClick} />
      </Container>
    </>
  );
};

export default Home;
