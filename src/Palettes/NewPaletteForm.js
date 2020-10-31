import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import ChromePicker from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DraggableColorList from '../Draggable/DraggableColorList';
import arrayMove from "array-move";

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});




class NewPaletteForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      currentColor: 'red',
      colors: [],
      newColorName: '',
      newPaletteName: ''
    }
  }
    
      handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
      handleDrawerClose = () => {
        this.setState({ open: false });
      };

      handleChangeComplete = newColor => {
        this.setState({currentColor: newColor.hex});  
      }

      addColor = () => {
        const color = { name: this.state.newColorName, color: this.state.currentColor };
        this.setState({colors: [...this.state.colors,color], newColorName: ''});
      }

      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
      
      componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
          this.state.colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase() 
          )
        );

        ValidatorForm.addValidationRule("isColorUnique", value =>
          this.state.colors.every(({ color }) => color !== this.state.currentColor)
        );
        
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
          this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== this.state.newPaletteName.toLowerCase())
        );

      }

      addPalette = () => {
        let {newPaletteName} = this.state;
        const palette = {
          paletteName: newPaletteName,
          id: newPaletteName.toLowerCase().replace(/ /g, "-"),
          colors: this.state.colors
        }

        this.props.addNewPalette(palette);
        this.props.history.push("/");
      }
       
      deleteColorBox = (name) =>{
        this.setState({colors: this.state.colors.filter(color => color.name !== name)});
      }

      onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => ({
          colors: arrayMove(colors, oldIndex, newIndex)
        }));
      };
    render(){ 
        const { classes } = this.props;
        const { open } = this.state;
        const {newColorName} = this.state;
  return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar
      position='fixed' color="default"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color='inherit'
          aria-label='Open drawer'
          onClick={this.handleDrawerOpen}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' color='inherit' noWrap>
          Persistent drawer
        </Typography>
        <ValidatorForm onSubmit={this.addPalette}>
            <TextValidator 
             value={this.state.newPaletteName}
             onChange={this.handleChange}
             name="newPaletteName"
             validators={["required", "isPaletteNameUnique"]}
             errorMessages={[
               "Enter a color name", "this palette name is already used"]}
            />
            <Button variant="contained" color="primary" type="submit">Save Palette</Button>
        </ValidatorForm>
      </Toolbar>
    </AppBar>
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={this.handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <Typography variant='h4'>Design Your Palette</Typography>
      <Button variant="contained" color="secondary">
           Clear Palette
      </Button>
      <Button variant="contained" color="primary">
            Random Color
      </Button>
      <ChromePicker color={this.state.currentColor} onChangeComplete={this.handleChangeComplete} />
      <ValidatorForm onSubmit={this.addColor} ref='form'>
        <TextValidator 
        value={newColorName} 
        onChange={this.handleChange}
        name="newColorName"
        validators={["required", "isColorNameUnique", "isColorUnique"]}
        errorMessages={[
          "Enter a color name",
          "Color name must be unique",
          "Color already used!"
        ]}
        />
        <Button variant='contained'  
        style={{backgroundColor: this.state.currentColor}}
        type='submit'
        >
          Add Color
      </Button>
      </ValidatorForm>
    </Drawer>
    <main
      className={classNames(classes.content, {
        [classes.contentShift]: open
      })}
    >
      <div className={classes.drawerHeader} />
     <DraggableColorList axis='xy' colors={this.state.colors} onSortEnd={this.onSortEnd} deleteColorBox={this.deleteColorBox}/>
    </main>
  </div>
);
}
}



export default withStyles(styles, { withTheme: true })(NewPaletteForm);