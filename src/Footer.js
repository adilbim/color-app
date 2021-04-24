import React from 'react';

function Footer(props) {
  const { paletteName, emoji } = props;
  return (
    <footer className="palette-footer">
      <span>{paletteName}</span>
      <span className="emoji">{emoji}</span>
    </footer>
  );
}

export default Footer;
