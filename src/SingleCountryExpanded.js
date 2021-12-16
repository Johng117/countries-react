// import { useState } from "react";

const SingleCountryExpanded = (props) => {
  const nationAndBorders = props.nation.map((element) => {
    return element;
  });
  const borderList = nationAndBorders.slice(1);

  return (
    <div>
      <div className="card2">
        <div className="back-button">
          <button onClick={props.reset} className="b-button">
            Back
          </button>
        </div>
        <div className="flag-container">
          <img src={nationAndBorders[0].flag} alt={nationAndBorders[0].name} />
        </div>
        <div className="country-details">
          <div className="details-header">
            <h1>{nationAndBorders[0].name}</h1>
          </div>
          <div className="details-box-one">
            <h5>Native Name: {nationAndBorders[0].nativeName}</h5>
            <h5>Population: {nationAndBorders[0].population}</h5>
            <h5>Region: {nationAndBorders[0].region}</h5>
            <h5>Sub Region: {nationAndBorders[0].subregion}</h5>
          </div>
          <div className="details-box-two">
            <h5>Capital: {nationAndBorders[0].capital}</h5>
            <h5>Top Level Domain: {nationAndBorders[0].topLevelDomain}</h5>
            <h5>Currencies: {nationAndBorders[0].currencies[0].name}</h5>
          </div>
          <div className="languages">
            <h5>Languages: </h5>
            {nationAndBorders[0].languages.map((element) => {
              return <p>{element.name}</p>;
            })}
          </div>
          <div className="bordering">
            <h5>Bordering Countries: </h5>
            <div className="border-panel">
              {borderList.map((country) => {
                return (
                  <button
                    onClick={() => {
                      props.getBorder(country.name);
                      props.info(false);
                    }}
                  >
                    {country.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountryExpanded;
