"use client";

import { usePathname, useRouter } from "next/navigation";
import "../(styles)/country-detail.styles.css";
import { useEffect, useState } from "react";
import { DataProvider } from "../data-provider";

export default function CountryDetail() {
  const [country, setCountry] = useState<any[]>();
  const [borders, setBorders] = useState<string[]>([]);
  const router = useRouter();

  let pathname = usePathname();
  pathname = pathname.toLowerCase();
  pathname = pathname.replace("/", "");

  useEffect(() => {
    const loadCountry = async () => {
      const data = await DataProvider.getByName(pathname);
      setCountry(data);

      if (!data[0].borders) return;

      const borderCountries = await Promise.all(
        data[0].borders.map((code: string) => DataProvider.getName(code)),
      );

      const borderNames: string[] = [];
      borderCountries.forEach((element) => {
        borderNames.push(element[0].name.common);
      });

      setBorders(borderNames);
    };

    loadCountry();
  }, [pathname]);

  return (
    <div className="details-page-wrapper">
      {country && (
        <div className="details-page">
          <div className="back-button clickable" onClick={() => router.back()}>
            <img className="back-arrow" />
            Back
          </div>
          <div className="country-info">
            <img className="country-detail-flag" src={country[0].flags.png} />
            <div className="detail-text-container">
              <h1>{country[0].name.common}</h1>

              <div className="detail-text">
                <p>
                  <b>Native Name: </b>
                  {
                    country[0].name.nativeName[
                      // getting the native name in native language
                      Object.keys(country[0].name.nativeName)[0]
                    ].common
                  }
                </p>
                <p>
                  <b>Population: </b>
                  {country[0].population}
                </p>
                <p>
                  <b>Region: </b>
                  {country[0].region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {country[0].subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {country[0].capital[0]}
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  {country[0].tld[0]}
                </p>
                <p>
                  <b>Currencies: </b>
                  {
                    country[0].currencies[Object.keys(country[0].currencies)[0]]
                      .name
                  }
                </p>
                <div className="languages-container">
                  <b>Languages: </b>
                  {Object.keys(country[0].languages).map((language, index) => {
                    if (
                      index ===
                      Object.keys(country[0].languages).length - 1
                    ) {
                      return (
                        <p key={language}>{country[0].languages[language]}</p>
                      );
                    }

                    return (
                      <p key={language}>{country[0].languages[language]}, </p>
                    );
                  })}
                </div>
              </div>
              <div className="border-countries-container">
                <b>Border Countries: </b>
                {borders.length != 0 ? (
                  borders.map((border, index) => {
                    return (
                      <div className="border-card" key={index}>
                        {border}
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <div className="border-card">None</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
