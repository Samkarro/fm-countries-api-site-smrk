"use client";
import { useEffect, useState } from "react";
import { DataProvider } from "./data-provider";

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
      {countries.map((element: any) => {
        console.log("entered");
        return <div key={element.name.common}>{element.name.common}</div>;
      })}
    </main>
  );
}
