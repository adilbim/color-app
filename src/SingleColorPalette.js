import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function SingleColorPalette({ Palette, match }) {
  const [format, setFormat] = useState('hex');

  const _shades = (id) => {
    let shades = [];
    let colors = Palette.colors;
    for (let key in colors) {
      shades = shades.concat(colors[key].filter((color) => color.id === id));
    }
    return shades.slice(1);
  };

  const { idColor } = match.params;
  const { paletteName, emoji, id } = Palette;
  const shadesOfColor = _shades(idColor).map((color, indx) => (
    <ColorBox key={indx} name={color.name} color={color[format]} />
  ));

  return (
    <div className="Palette SingleColorPalette">
      <Navbar changeFormat={setFormat} showSlider={false} />
      <div className="Palette-colors">
        {shadesOfColor}
        <div className="ColorBox go-back">
          <Link to={`/palette/${id}`}>
            <span className="copy-button">Go Back</span>
          </Link>
        </div>
      </div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default SingleColorPalette;
