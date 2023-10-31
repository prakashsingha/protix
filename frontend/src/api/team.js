import { fetchData } from '../utils/fetch-data.util';

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchAllTeams = async () => {
  return fetchData(`${apiUrl}/team`);
};
