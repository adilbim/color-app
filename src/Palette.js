import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level: 500, format: 'hex'};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level){
        this.setState({level});
        //console.log(level);   
    }

    changeFormat(newFormat){
       this.setState({format: newFormat});
    }

    render(){
        const {format, level} = this.state;
        const ColorBoxs = this.props.Palette.colors[level].map(color => (<ColorBox name={color.name} color={color[format]} />))
        return(
            <div className="Palette">
                <Navbar level={level} 
                        changeLevel={this.changeLevel} 
                        changeFormat={this.changeFormat}
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