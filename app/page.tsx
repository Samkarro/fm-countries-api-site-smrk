"use client";
import { useEffect, useState } from "react";
import { DataProvider } from "./data-provider";
import "./(styles)/home.styles.css";

export default function Home() {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      const data = await DataProvider.getAllCountries();
      setCountries(data);
      console.log("useEffect");
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
        <label htmlFor="region" hidden>
          Filter by region.
        </label>
        <select name="region">
          <option value="filter-by">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="countries-container">
        {countries.map((element: any) => {
          console.log("entered");
          return <div key={element.name.common}>{element.name.common}</div>;
        })}
      </div>
    </main>
  );
}
