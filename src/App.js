import React from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';


function App() {
  console.log(generatePalette(seedColors[0]));
  return (
    <Switch>
      <Route exact path="/" render={()=><h1>all Palettes goes here</h1>}/>
      <Route exact path="/palette/:id" render={()=> <h1>Show an individual Palette</h1>} />
    </Switch>
    // <div className="App">
    //   <Palette Palette={generatePalette(seedColors[0])} />
    // </div>
  );
}

export default App;
