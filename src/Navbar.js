import React, {Component} from 'react';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';

class Navbar extends Component{


    render(){
        const level = this.props.level;
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="#">ReactColorApp</a>
                </div>
                <div className="slider-container">
                    <span>{level}</span>
                    <div className="slider">
                        <Slider defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onChange={this.props.changeLevel} 
                        />
                    </div>
                </div>
            </header>
        );
    }

}


export default Navbar;