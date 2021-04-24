import React, { useState } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

function ColorBox({ name, url, showLink, color }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    //convert this into a watch property.
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    setCopied(true);
    await delay(1500);
    setCopied(false);
  };

  const hex = color;
  const isLight = chroma(hex).luminance() >= 0.6;
  const isDark = chroma(hex).luminance() <= 0.06;

  return (
    <CopyToClipboard text={hex} onCopy={handleCopy}>
      <div style={{ background: hex }} className="ColorBox">
        <div
          style={{ background: hex }}
          className={`copy-overlay ${copied ? 'show' : ''}`}
        />
        <div className={`copy-mssg ${copied ? 'show' : ''}`}>
          <h1>Copied!</h1>
          <p className={isLight ? 'isLight' : ''}>{hex}</p>
        </div>
        <div className="copy-container">
          <div className={`box-content ${isDark ? 'isDark' : ''}`}>
            <span>{name + ' ' + chroma(hex).luminance()}</span>
          </div>
          <button className={`copy-button ${isLight ? 'isLight' : ''}`}>
            Copy
          </button>
        </div>
        {showLink && (
          <Link to={url} onClick={(e) => e.stopPropagation()}>
            <span className={`see-more ${isLight ? 'isLight' : ''}`}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
