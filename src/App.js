import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

function App() {
  const [palettes, setPalettes] = useState(seedColors);

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

  const addNewPalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routProps) => (
          <PaletteList palettes={palettes} {...routProps} />
        )}
      />
      <Route
        exact
        path="/palette/new"
        render={(routeProps) => (
          <NewPaletteForm
            palettes={palettes}
            {...routeProps}
            addNewPalette={addNewPalette}
          />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            Palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:idPalette/:idColor"
        render={(routeProps) => (
          <SingleColorPalette
            {...routeProps}
            Palette={generatePalette(
              findPalette(routeProps.match.params.idPalette)
            )}
          />
        )}
      />
    </Switch>
  );
}

export default App;
