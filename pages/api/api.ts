import axios from "axios";
import { cropProps } from "../../types/types";
import {
  solutionProps,
  solutionCropProps,
  inputDataProps,
} from "../../types/types";

const hostName = "http://localhost:8080";

export const fetchCrops = async () => {
  const response = await axios.get(`${hostName}/crop/get-all`).then();
  return response.data as cropProps[];
};

export const fetchSolutions = async () => {
  const response = await axios.get(`${hostName}/solution/get-all`).then();
  return response.data;
};

export const fetchSolution = async (id: number) => {
  const response = await axios.get(`${hostName}/solution/get/${id}`).then();
  return response.data as solutionProps;
};

export const postUserInput = async (data: inputDataProps) => {
  const response = await axios.post(`${hostName}/main/solve-new`, data).then();
  return response.data as solutionProps;
};
