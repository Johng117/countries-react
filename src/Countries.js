import data from "./countriesAll.json";
import React, { useState } from "react";
import SingleCountry from "./SingleCountry";
import SingleCountryExpanded from "./SingleCountryExpanded";

const Countries = () => {
  const [textInput, setTextInput] = useState({ value: "" });
  const [allCountries, setAllCountries] = useState(data);
  const [countryInfo, setCountryInfo] = useState(true);
  const [oneNation, setOneNation] = useState([]);
  // const [buttonOn, setButtonOn] = useState(false);

  // function home() {
  //   setTextInput({ value: "" });
  //   setButtonOn(!buttonOn);
  //   setAllCountries(data);
  // }

  function handleInput(e) {
    return setTextInput({ value: e.target.value });
  }

  function selectHandler(e) {
    let regionName = e.target.value;
    let countryData = data;
    if (regionName === "filter") {
      setAllCountries(countryData);
    } else {
      let regionArray = countryData.filter(
        (country) => country.region === regionName,
      );
      setAllCountries(regionArray);
    }
  }

  function oneCountry(name) {
    let selectedCountry = allCountries.filter(
      (country) => country.name === name,
    );
    let bordering = selectedCountry.concat(
      selectedCountry[0].borders.map((border) => {
        return allCountries.filter((element) => element.alpha3Code === border);
      }),
    );

    setOneNation(bordering.flat());
    setCountryInfo(!countryInfo);
  }

  function reset() {
    setAllCountries(data);
    setTextInput({ value: "" });
    // setButtonOn(!buttonOn);
    setCountryInfo(!countryInfo);
    setOneNation([]);
  }

  function goToBorder(name) {
    oneCountry(name);
  }
  return (
    <div>
      <header className="header">
        <h3>Where in The world?</h3>
      </header>
      <div className="all-countries-container">
        {countryInfo ? (
          <div className="search-container">
            <form>
              <input
                type="text"
                placeholder="Search for a country..."
                onChange={handleInput}
              ></input>
            </form>
            {/* <div>{buttonOn ? <button onClick={home}>back</button> : null}</div> */}
            <select name="regions" id="regions" onChange={selectHandler}>
              <option value="filter" selected>
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        ) : null}

        <div className="country-cards">
          {countryInfo ? (
            textInput.value.length === 0 ? (
              allCountries.map((country) => {
                return (
                  <SingleCountry
                    src={country.flag}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    countryClick={oneCountry}
                    key={country.alpha2Code}
                  />
                );
              })
            ) : textInput.value.length !== 0 ? (
              allCountries.map((country) => {
                const inputted = textInput.value.toLowerCase();
                return country.name.toLowerCase().includes(inputted) ? (
                  <SingleCountry
                    src={country.flag}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    countryClick={oneCountry}
                  />
                ) : null;
              })
            ) : null
          ) : (
            <SingleCountryExpanded
              nation={oneNation}
              reset={reset}
              info={setCountryInfo}
              getBorder={goToBorder}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Countries;
