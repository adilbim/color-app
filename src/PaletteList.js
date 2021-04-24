import React from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    '& a': {
      color: 'white',
    },
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  },
};

function PaletteList({ palettes, classes, history }) {
  const goToPalette = (id) => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              key={palette.id}
              {...palette}
              handleClick={() => goToPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
