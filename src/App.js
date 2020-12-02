import "./App.css";
import { MenuItem, FormControl, Select } from "material-ui/core";
function App() {
  return (
    <div className="app">
      {/*BEM convention*/}
      <h1>COVID-19 TRACKER</h1>
      {/* FormControl, Select..etc... matarial ui offers!! */}
      <FormControl className="app__dropdown">
        {/* Select has a bunch of attributes */}
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option 2</MenuItem>
          <MenuItem value="worldwide">Option 3</MenuItem>
          <MenuItem value="worldwide">Yoooo</MenuItem>
        </Select>
      </FormControl>
      {/*Header */}

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
