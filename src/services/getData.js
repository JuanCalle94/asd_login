import axios from 'axios';

const apiUrl = `https://api.wazirx.com/sapi/v1/tickers/24hr`;

export const getData = async () => {
  const res = await axios.get(apiUrl);
  return res.data
};
