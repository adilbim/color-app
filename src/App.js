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
      render={(routProps)=> <PaletteList palettes={seedColors} {...routProps} />}
      />
      <Route 
      exact 
      path="/palette/:id" 
      render={(routeProps)=> <Palette Palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} 
      />
      <Route exact path="/palette/:idPalette/:idColor" render={()=> <h1>Color Details !</h1>} />
    </Switch>
  );
}
}

export default App;
