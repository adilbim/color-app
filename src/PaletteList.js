import React from 'react';
import MiniPalette from './MiniPalette';


class PaletteList extends React.Component{


    render(){
        const {palettes} = this.props;
        return (
            
                palettes.map(palette => (<MiniPalette {...palette} />))
            
        );
    }
}

export default PaletteList;