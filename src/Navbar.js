import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';


class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = { format: 'hex', open: false};
        this.handleChange = this.handleChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleChange(e){
       this.setState({format: e.target.value, open: true});
       this.props.changeFormat(e.target.value);
    }
    closeSnackbar(){
        this.setState({open: false});
    } 
    render(){
        const level = this.props.level;
        const {format, open} = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <Link to="/">ReactColorApp</Link>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onChange={this.props.changeLevel} 
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar open={open} 
                   anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  message={'Format Has Changed To ' + format.toUpperCase()}
                  autoHideDuration={3000}
                  onClose={this.closeSnackbar}
                  action={[ 
                    <IconButton size="small" aria-label="close" color="inherit" onClick={this.closeSnackbar}>
                    <CloseIcon fontSize="small" />
                    </IconButton>
                  ]}  

                />
            </header>
        );
    }

}


export default Navbar;