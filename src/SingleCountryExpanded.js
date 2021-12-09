const SingleCountryExpanded = (props) => {
  return (
    <div>
      {props.nation.map((element) => (
        <div className="card2">
          <div className="flag-container">
            <img src={element.flag} alt={element.name} />
          </div>
          <div className="country-details">
            <div className="details-header">
              <h1>{element.name}</h1>
            </div>
            <div className="details-box-one">
              <h5>Native Name: {element.nativeName}</h5>
              <h5>Population: {element.population}</h5>
              <h5>Region: {element.region}</h5>
              <h5>Sub Region: {element.subregion}</h5>
            </div>
            <div className="details-box-two">
              <h5>Capital: {element.capital}</h5>
              <h5>Top Level Domain: {element.topLevelDomain}</h5>
              <h5>Currencies: {element.currencies[0].name}</h5>
            </div>
            <div className="languages">
              <h5>Languages: </h5>
            </div>
            <div className="bordering">
              <h5>Bordering Countries: </h5>
            </div>
          </div>
          <div className="back-button">
            <button onClick={props.reset}>Back</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCountryExpanded;
