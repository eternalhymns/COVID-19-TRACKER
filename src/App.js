import "./App.css";
import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
function App() {
  // STATE = How to write variable in REACT >>>>
  // REQUEST URL: https://disease.sh/v3/covid-19/countries
  // USEEFFECT = Runs a piece of code based on given condition
  const [countries, setCountries] = useState([]); //the initial value is '[]'
  useEffect(() => {
    // The code inside here will run once
    // when the app.js component loads and not again
    // 만약 변수인 countries의 상태가 변한다면, 다시 로드될 것임( REFIRE 🔥 !!! )
    //여기다는 async 코드를 적을 것인데,  TO SEND A REQUEST (ping on the server), WAIT FOR IT, DO SOMETHING WITH INFO
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json()) //return json type
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United Kingdom, United States
            value: country.countryInfo.iso2, //UK, USA, FR
          }));
          setCountries(countries);
        });
      
    };
    getCountriesData(); //call the funtion which defined above.
  }, []);
  return (
    <div className="app">
      {/*Header */}
      <div className="app__header">
        {/*BEM convention*/}
        <h1>COVID-19 TRACKER</h1>
        {/* FormControl, Select..etc... matarial ui offers!! */}
        <FormControl className="app__dropdown">
          {/* Select has a bunch of attributes */}
          <Select variant="outlined" value="abc">
            {/* Loop through all the countries and show a drop down list of the options */}
            {
              // every country return Item. in this case, RETURN MenuItem
              countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
            <MenuItem value="worldwide">Yoooo</MenuItem> */}
          </Select>
        </FormControl>
      </div>

      {/*Title + Select input dropdown field */}

      {/*InfoBox */}
      {/*InfoBox */}
      {/*InfoBox */}

      {/*Table*/}
      {/*Graph */}

      {/*Map */}
    </div>
  );
}

export default App;
