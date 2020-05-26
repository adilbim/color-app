import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';


function App() {
  console.log(generatePalette(seedColors[0]));
  return (
    <div className="App">
      <Palette Palette={generatePalette(seedColors[0])} />
    </div>
  );
}

export default App;
