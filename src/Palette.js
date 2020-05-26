import React, {Component} from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './Palette.css';
import Slider from 'rc-slider';

class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level: 500};
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level){
        this.setState({level});
        console.log(level);   
    }

    render(){
        const level = this.state.level;
        const ColorBoxs = this.props.Palette.colors[level].map(color => (<ColorBox {...color} />))
        return(
            <div className="Palette">
                <Slider defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onChange={this.changeLevel} 
                />
                {/* {here goes the nav bar} */}
                <div className="Palette-colors">
                    {ColorBoxs}
                </div>
                {/* {here goes the footer} */}
            </div>
        );
    }
}


export default Palette;