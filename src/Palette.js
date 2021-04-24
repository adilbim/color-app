import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Palette({ Palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const { id, paletteName, emoji } = Palette;
  const ColorBoxs = Palette.colors[level].map((color) => (
    <ColorBox
      name={color.name}
      color={color[format]}
      key={color.id}
      url={`/palette/${id}/${color.id}`}
      showLink
    />
  ));
  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={setLevel}
        changeFormat={setFormat}
        showSlider
      />
      <div className="Palette-colors">{ColorBoxs}</div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default Palette;
