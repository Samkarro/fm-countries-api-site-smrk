export const DataProvider = {
  getAllCountries: async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flag,population,region,capital",
    );
    return response.json();
  },
};
