"use client";
import { useEffect, useState } from "react";
import { DataProvider } from "./data-provider";
import "./(styles)/home.styles.css";
import CountryCard from "./(common)/(components)/country-card";
import CustomDropdown from "./(common)/(components)/custom-dropdown";

export default function Home() {
  const [countries, setCountries] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("Filter by Region");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const loadCountries = async () => {
      const data = await DataProvider.getAllCountries();
      setCountries(data);
    };

    loadCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesRegion =
      filter === "Filter by Region" || country.region === filter;

    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesRegion && matchesSearch;
  });

  return (
    <main>
      <div className="search-bar-container">
        <label htmlFor="search" hidden>
          Search by country name.
        </label>
        <input
          name="search"
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CustomDropdown setFilter={setFilter} />
      </div>
      <div className="countries-container">
        {filteredCountries.map((element: any) => (
          <CountryCard
            key={element.name.common}
            flag={element.flags.png}
            flagAlt={element.flags.alt}
            name={element.name.common}
            capital={element.capital[0]}
            region={element.region}
            population={element.population}
            code={element.cca3}
          />
        ))}
      </div>
    </main>
  );
}
