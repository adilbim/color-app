import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';

function Navbar({ changeFormat, level, changeLevel, showSlider }) {
  const [format, setFormat] = useState('hex');
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setFormat(e.target.value);
    setOpen(true);
    changeFormat(e.target.value);
  };
  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/">ReactColorApp</Link>
      </div>
      {showSlider && (
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onChange={changeLevel}
            />
          </div>
        </div>
      )}
      <div className="select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        message={'Format Has Changed To ' + format.toUpperCase()}
        autoHideDuration={3000}
        onClose={closeSnackbar}
        action={[
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>,
        ]}
      />
    </header>
  );
}

export default Navbar;
