import "../../(styles)/country-card.styles.css";

export default function ({
  flag,
  flagAlt,
  name,
  capital,
  region,
  population,
}: {
  flag: string;
  flagAlt: string;
  name: string;
  capital: string;
  region: string;
  population: number;
}) {
  return (
    <a className="country-card-anchor-wrapper" href={`/${name}`}>
      <div className="country-card">
        <div className="country-card-flag-container">
          <img className="country-card-flag" src={flag} alt={flagAlt} />
        </div>
        <div className="country-card-text-container">
          <h2>{name}</h2>
          <div className="country-card-subdata">
            <p>
              <b>Population: </b>
              {population}
            </p>
            <p>
              <b>Region: </b>
              {region}
            </p>
            <p>
              <b>Capital: </b>
              {capital}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
