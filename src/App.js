import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';


function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette Palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
