const API_LINK = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrenciesAPI = async () => {
  try {
    const currencies = await fetch(
      API_LINK,
    );
    const currenciesJson = await currencies.json();
    return currenciesJson;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default fetchCurrenciesAPI;
