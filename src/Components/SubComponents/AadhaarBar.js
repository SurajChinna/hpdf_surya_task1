import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


const styles = {
  root: {
    width: '100%',
  },
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{backgroundColor:'#1da1f2'}}>
        <Toolbar>
          <Grid container direction="row">
            <Grid item xs={1}>
            </Grid>
            <Grid item>
              <Typography type="title" style={{color:'#ffffff'}}>
                aadhaar
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);