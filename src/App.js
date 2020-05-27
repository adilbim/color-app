import React from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';


class App extends React.Component {
  //console.log(generatePalette(seedColors[0]));
 findPalette(id){
    return seedColors.find((palette)=> palette.id === id);
  }
  render(){ 
  return (
    <Switch>
      <Route exact path="/" 
      render={()=> seedColors.map(palette => <PaletteList palette={palette}/>)}
      />
      <Route 
      exact 
      path="/palette/:id" 
      render={(routeProps)=> <Palette Palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} 
      />
    </Switch>
    // <div className="App">
    //   <Palette Palette={generatePalette(seedColors[0])} />
    // </div>
  );
}
}

export default App;
