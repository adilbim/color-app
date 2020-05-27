import React from 'react';
import {Link} from 'react-router-dom';


class PaletteList extends React.Component{


    render(){
        const {palette} = this.props;
        return (
            <div>
                <p>
        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                </p>
            </div>
        );
    }
}

export default PaletteList;