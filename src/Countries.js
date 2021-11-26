import data from "./countriesAll.json";
import React, { useState } from "react";
import SingleCountry from "./SingleCountry";

const Countries = () => {
  const [showCountry, setShowCountry] = useState({ value: "" });

  function handleInput(e) {
    return setShowCountry({
      value: e.currentTarget.value,
    });
  }

  return (
    <div>
      <header className="header">
        <h3>Where in The world?</h3>
      </header>
      <div className="all-countries-container">
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Search for a country..."
              value={showCountry.value}
              onChange={handleInput}
            ></input>
          </form>
        </div>
        <div className="country-cards">
          {showCountry.value.length === 0
            ? data.map((country) => {
                return <SingleCountry
                  src={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />;
              })
            : showCountry.value.length !== 0
            ? data.map((country) => {
                const inputted = showCountry.value.toLowerCase();
                return country.name.toLowerCase().includes(inputted) ? (
                  <div className="card">
                    <img src={country.flag} alt="" />
                    <h4>{country.name}</h4>
                    <h5>Population: {country.population}</h5>
                    <h5>Region: {country.region}</h5>
                    <h5>Capital: {country.capital}</h5>
                  </div>
                ) : null;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Countries;
