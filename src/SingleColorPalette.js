import React from 'react';
import ColorBox from './ColorBox';




class SingleColorPalette extends React.Component{
    constructor(props){
        super(props);
        this._shades = this._shades.bind(this);
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

    render(){
        const {idColor} = this.props.match.params;
        const shadesOfColor = this._shades(idColor).map((color,indx) => <ColorBox key={indx} name={color.name} color={color.hex} />)
        return (
            <div className='Palette'>
               <h1>Single Color Palette</h1>
               <div className='Palette-colors'>{shadesOfColor}</div>
            </div>
        );
    }
}

export default SingleColorPalette;