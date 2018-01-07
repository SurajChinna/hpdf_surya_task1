import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import UserData from './SubComponents/UserData.js'
import Trends from './SubComponents/Trends.js'


const styles = theme => ({
  root: {
  	marginTop:20,
  	backgroundColor:"#e6ecf0"
  },
});

function LeftPane(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="column" >
        <Grid item >
        	<UserData />
        </Grid>

        <Grid item style={{marginTop:10}}>
        	<Trends />
        </Grid>
      </Grid>
    </div>
  );
}

LeftPane.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftPane);