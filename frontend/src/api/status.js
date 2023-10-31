import { fetchData } from '../utils/fetch-data.util';

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchAllStatuses = async () => {
  return fetchData(`${apiUrl}/status`);
};
