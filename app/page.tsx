"use client";
import { useEffect, useState } from "react";
import { DataProvider } from "./data-provider";
import "./(styles)/home.styles.css";
import CountryCard from "./(common)/(components)/country-card";
import CustomDropdown from "./(common)/(components)/custom-dropdown";

export default function Home() {
  const [countries, setCountries] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("Filter by Region");

  useEffect(() => {
    const loadCountries = async () => {
      const data = await DataProvider.getAllCountries();
      setCountries(data);
    };

    loadCountries();
  }, []);

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
        />
        <CustomDropdown setFilter={setFilter} />
      </div>
      <div className="countries-container">
        {filter === "Filter by Region"
          ? countries.map((element: any) => {
              return (
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
              );
            })
          : countries.map((element: any) => {
              if (element.region === filter) {
                return (
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
                );
              }
            })}
      </div>
    </main>
  );
}
