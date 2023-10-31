import { fetchData, callApi } from '../utils/fetch-data.util';

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchAllReviews = async (incidentCaseId) => {
  try {
    const data = await fetchData(
      `${apiUrl}/incident-review?incidentCaseId=${incidentCaseId}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const addIncidentComment = async ({ data }) => {
  return callApi('POST', `${apiUrl}/incident-review`, data);
};

export const updateIncidentComment = async ({ id, data }) => {
  return callApi('PATCH', `${apiUrl}/incident-review/${id}`, data);
};
