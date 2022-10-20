export type userProps = {
  id: number;
  nome: string;
  efficiency: number;
  teamList: teamProps[] | null;
  hourLogList: hourLogProps[] | null;
};

export type teamProps = {
  id: number;
  nome: string;
  listaUsuario: userProps[]| null;
};

export type requestProps = {
  id: number;
  stateHistoryList: stateHistoryProps[] | null,
  deliveryData: string,
  hoursRequest: number,
  userList: userProps[]| null;
  complexity: number,
  activitiesList: activityProps[]
};

export type stateHistoryProps ={
  id:number,
  request: requestProps | null,
  state: number,
  stateChangeDate: string
}

export type hourLogProps ={
  id:number,
  request: requestProps | null,
  user: userProps,
  date: string,
  startDate: string,
  endDate: string
}

export type activityProps ={
  id:number,
  request: requestProps| null,
  user: userProps| null,
  complexity:number
}

/*
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
*/