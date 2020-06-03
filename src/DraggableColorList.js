import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer} from "react-sortable-hoc";


const DraggableColorList = SortableContainer(({ colors, deleteColorBox }) => {
    return (
      <div style={{height: "100%"}}>
        {colors.map((color, index) => (
          <DraggableColorBox key={color.name} index={index} handleClick={()=> deleteColorBox(color.name)} color={color}/>
        ))}
      </div>
    );
  });


 export default DraggableColorList; 