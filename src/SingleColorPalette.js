import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';




class SingleColorPalette extends React.Component{
    constructor(props){
        super(props);
        this._shades = this._shades.bind(this);
        this.state = {format: 'hex'};
        this.changeFormat = this.changeFormat.bind(this);
    }
    
    _shades(id){
        let shades = [];
        let colors= this.props.Palette.colors;
        for(let key in colors){
            shades = shades.concat(
               colors[key].filter(color => color.id === id)
            );
         }
        return shades.slice(1);
    }

    changeFormat(newFormat){
        this.setState({format: newFormat});
     }

    render(){
        const {idColor} = this.props.match.params;
        const {paletteName, emoji} = this.props.Palette;
        const {format} = this.state;
        const shadesOfColor = this._shades(idColor).map((color,indx) =>
         <ColorBox key={indx} 
         name={color.name} 
         color={color[format]} 
         />)
        return (
            <div className='Palette'>
               <Navbar  changeFormat={this.changeFormat} showSlider={false} />
               <div className='Palette-colors'>{shadesOfColor}</div>
               <Footer paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColorPalette;