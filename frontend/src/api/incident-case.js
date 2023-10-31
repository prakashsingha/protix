import { callApi, fetchData } from '../utils/fetch-data.util';

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchIncidentCase = async () => {
  return fetchData(`${apiUrl}/incident-case/1`);
};

export const updateIncidentCase = async ({ id, data }) => {
  console.log('PATCH', `${apiUrl}/incident-case/${id}`, data);
  return callApi('PATCH', `${apiUrl}/incident-case/${id}`, data);
};
