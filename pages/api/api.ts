import axios from "axios";
import {
  requestProps,
  teamProps,
  userProps,

} from "../../types/types";

const hostName = "http://192.168.15.3:3000";

export const fetchUsers = async () => {
  const response = await axios.get(`${hostName}/user`).then();
  return response.data as userProps[];
};

export const fetchTeams = async () => {
  const response = await axios.get(`${hostName}/team`).then();
  return response.data as teamProps[];
};

export const fetchRequests = async () => {
  const response = await axios.get(`${hostName}/request`).then();
  return response.data as requestProps[];
};


