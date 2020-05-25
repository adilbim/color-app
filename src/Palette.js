import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component{


    render(){
        const ColorBoxs = this.props.colors.map(color => (<ColorBox {...color} />))
        return(
            <div className="Palette">
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