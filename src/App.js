import "./App.css";
import React, { useState } from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core";
function App() {
  // STATE = How to write variable in REACT >>>>
  const [countries, setCountries] = useState(['USA', 'UK', 'INDIA']) //the initial value is '[]'
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
              // every country return Item. in this case, return MenuItem
              countries.map( country =>(
              <MenuItem value={country}>{country}</MenuItem>
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
