import axios from 'axios';

export const fetchData = async (url) => {
  return callApi('GET', url, null);
};

export const callApi = async (method, url, data) => {
  const config = {
    method,
    url,
    data,
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        `Request failed with status ${error.response.status}: ${error.response.data}`
      );
    } else if (error.request) {
      throw new Error('No response received from the server.');
    } else {
      throw new Error('Request failed with an unknown error.');
    }
  }
};
