"use client";

import { usePathname } from "next/navigation";
import "../(styles)/country-detail.styles.css";
import { useEffect, useState } from "react";
import { DataProvider } from "../data-provider";

export default function CountryDetail() {
  const [country, setCountry] = useState();

  let pathname = usePathname();
  pathname = pathname.toLowerCase();
  pathname = pathname.replace("/", "");

  useEffect(() => {
    const loadCountry = async () => {
      const data = await DataProvider.getByName(pathname);
      setCountry(data);
    };

    loadCountry();
  }, []);

  return (
    <div>{country && <p className="test">{country[0].name.common}</p>}</div>
  );
}
