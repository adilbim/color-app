import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

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
                <Navbar level={level} changeLevel={this.changeLevel} />
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