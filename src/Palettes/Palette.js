import React, {Component} from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './Palette.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

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
        const {id, paletteName, emoji} = this.props.Palette;
        const ColorBoxs = this.props.Palette.colors[level].map(color => (
        <ColorBox 
        name={color.name} 
        color={color[format]} 
        key={color.id} 
        url={`/palette/${id}/${color.id}`}
        showLink
        />))
        return(
            <div className="Palette">
                <Navbar level={level} 
                        changeLevel={this.changeLevel} 
                        changeFormat={this.changeFormat}
                        showSlider
                />
                <div className="Palette-colors">
                    {ColorBoxs}
                </div>
                <Footer paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}


export default Palette;