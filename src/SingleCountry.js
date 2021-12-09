import React from "react";

const SingleCountry = (props) => {
  return (
    <div className="card" onClick={()=>props.countryClick(props.name)} key={props.key}>
      <img src={props.src} alt={props.alt} />
      <h4>{props.name}</h4>
      <h5>Population: {props.population}</h5>
      <h5>Region: {props.region}</h5>
      <h5>Capital: {props.capital}</h5>
    </div>
  );
};

export default SingleCountry;
