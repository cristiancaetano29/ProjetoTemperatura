/* eslint-disable linebreak-style */
const KEy = '69027c75f714439fa3d04652220406';

const fetchData = async (cidade) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEy}&q=${cidade}&aqi=no`;
  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  return data;
};

export default fetchData;
