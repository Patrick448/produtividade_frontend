export type userProps = {
  id: number;
  nome: string;
  pesoEficiencia: number;
  listaTime: teamProps[] | null;
  listaRelatorioHora: hourLogProps[] | null;
};

export type teamProps = {
  id: number;
  nome: string;
  listaUsuario: userProps[]| null;
};

export type requestProps = {
  id: number;
  listaHistoricoEstado: stateHistoryProps[] | null,
  dataEntrega: string,
  horaDemanda: number,
  listaUsuario: userProps[]| null;
  pesoComplexidade: number
};

export type stateHistoryProps ={
  id:number,
  demanda: requestProps | null,
  estado: number,
  dataMudancaEstado: string
}

export type hourLogProps ={
  id:number,
  demanda: requestProps | null,
  usuario: userProps,
  data: string,
  dataInicio: string,
  dataFim: string
}


export type solutionProps = {
  id: number;
  solutionCrops: solutionCropProps[];
  inputData: inputDataProps;
  fields: fieldProps[];
};

export type inputDataProps = {
  id: number | null;
  budget: number;
  space: number;
  selectedCrops: cropProps[];
  fields: fieldProps[];
  timeFrames: number | null;
};

export type fieldProps = {
  id: number | null;
  name: string;
  size: number;
};

export type plantProps = {
  name: string;
  value: number;
  cost: number;
};

export type dataProps = {
  investiment: number | null;
  fields: fieldProps[];
  plants: plantProps[];
};

export type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
  isActive: boolean;
};

export type solutionCropProps = {
  id: number;
  amount: number;
  crop: cropProps;
  timeFrame: number;
  field: fieldProps;
};
