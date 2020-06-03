import React from 'react';
import { withStyles } from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';


const styles = {
    ColorBox:{
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        }
    },

    BoxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "rgba(0,0,0,0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },

    DeleteIcon: {
        transition: "all 0.5s ease-in-out"
    }
}


function DraggableColorBox(props){
    
    const {classes} = props;
    return (
        <div className={classes.ColorBox} style={{backgroundColor: props.color.color}}>
            <div className={classes.BoxContent}>
                <span>
                   {props.color.name}
                </span>
                <DeleteIcon className={classes.DeleteIcon} /> 
            </div>
           
        </div>
    );
}

export default withStyles(styles)(DraggableColorBox);