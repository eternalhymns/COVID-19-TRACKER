import "./App.css";
import React, { useState, useEffect } from "react";
import Table from "./Table";
import LineGraph from "./LineGraph"
import { sortData } from "./util";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
function App() {
  // STATE = How to write variable in REACT >>>>
  // REQUEST URL: https://disease.sh/v3/covid-19/countries
  // USEEFFECT = Runs a piece of code based on given condition
  const [countries, setCountries] = useState([]); //the initial value is '[]'
  const [country, setCountry] = useState("worldwide"); //To remember which option i selected. By default, 'worldwide' selected
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    //runs when App.js first execute.
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []); // you have to write down [] as a parameter. keep in mind!!!

  useEffect(() => {
    // The code inside here will run once
    // when the app.js component loads and not again
    // 만약 변수인 countries의 상태가 변한다면, 다시 로드될 것임( REFIRE 🔥 !!! )
    // 여기다는 async 코드를 적을 것인데,  TO SEND A REQUEST (ping on the server), WAIT FOR IT, DO SOMETHING WITH INFO
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json()) //return json type
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United Kingdom, United States
            value: country.countryInfo.iso2, //UK, USA, FR
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });
    };
    getCountriesData(); //call the funtion which defined above.
  }, []);
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);
    setCountry(countryCode);
    // https://disease.sh/v3/covid-19/all   -> worldwide
    // https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE] -> selected country
    // worldwide라면 url 주소는 다음과 같고, 아니라면 컨츄리코드가 달린 url로.
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url) //await 하고, go to the url and fetch!
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  };

  console.log("COUNTRY INFO >>>", countryInfo);
  return (
    <div className="app">
      <div className="app__left">
        {/*Header */}
        <div className="app__header">
          {/*BEM convention*/}
          <h1>COVID-19 TRACKER</h1>
          {/* FormControl, Select..etc... matarial ui offers!! */}
          <FormControl className="app__dropdown">
            {/* Select has a bunch of attributes */}
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              {/* Loop through all the countries and show a drop down list of the options */}
              <MenuItem value="worldwide">Worldwide</MenuItem>
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

        <div className="app__stats">
          <InfoBox
            title="Coronavirus Cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          ></InfoBox>
          <InfoBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          ></InfoBox>
          <InfoBox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          ></InfoBox>
          {/*InfoBox title="Coronavirus cases" */}
          {/*InfoBox title="Recovery" */}
          {/*InfoBox title="" */}
        </div>

        {/*Map */}
        <Map />
      </div>
      <Card className="app_right">
        <CardContent>
          {/* in the table, i will parse  */}
          <Table countries={tableData} />
          <h3>Live Cases by Country</h3>
          <LineGraph/>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
