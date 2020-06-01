import React from 'react';


export default function DraggableColorBox(props){

//   const style = {
//         root:{

//         }
//     }

    return (
        <div className="ColorBox" style={{backgroundColor: props.color}}>
            {props.color}
        </div>
    );
}