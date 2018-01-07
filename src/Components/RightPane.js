import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Follow from './SubComponents/Follow.js'
import Policy from './SubComponents/Policy.js'


const styles = theme => ({
  root: {
  	marginTop:20,
  	backgroundColor:"#e6ecf0"
  },
});

function RightPane(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="column" >
        <Grid item >
        	<Follow />
        </Grid>

        <Grid item style={{marginTop:10}}>
        	<Policy />
        </Grid>
      </Grid>
    </div>
  );
}

RightPane.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightPane);