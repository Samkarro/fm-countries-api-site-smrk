export const DataProvider = {
  getAllCountries: async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3",
    );
    return response.json();
  },

  getByName: async (code: string) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`,
    );
    return response.json();
  },
};
