import React from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from './Palettes/Palette';
import PaletteList from './Palettes/PaletteList';
import seedColors from './utils/seedColors';
import { generatePalette } from './utils/colorHelpers';
import SingleColorPalette from './Palettes/SingleColorPalette';
import NewPaletteForm from './Palettes/NewPaletteForm';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {palettes: seedColors};
    this.findPalette = this.findPalette.bind(this);
    this.addNewPalette = this.addNewPalette.bind(this);
  }

  findPalette(id){
    return this.state.palettes.find((palette)=> palette.id === id);
  }
  
  addNewPalette(newPalette){
   this.setState({palettes: [...this.state.palettes, newPalette]});
  }

  render(){ 
  return (
    <Switch>
      <Route exact path="/" 
      render={(routProps)=> <PaletteList palettes={this.state.palettes} {...routProps} />}
      />
      <Route exact path="/palette/new" render={(routeProps)=>
          <NewPaletteForm 
            palettes={this.state.palettes} 
            {...routeProps} 
            addNewPalette={this.addNewPalette} 
          />}
      />
      <Route 
      exact 
      path="/palette/:id" 
      render={(routeProps)=> <Palette Palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} 
      />
      <Route exact path="/palette/:idPalette/:idColor" render={(routeProps)=> 
      <SingleColorPalette 
        {...routeProps} 
        Palette={generatePalette(this.findPalette(routeProps.match.params.idPalette))} 
        />}
      />
    </Switch>
  );
}
}

export default App;
