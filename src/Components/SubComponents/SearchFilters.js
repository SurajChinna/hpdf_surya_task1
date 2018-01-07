import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  root: {
  },
});

function Trends(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="row" style={{backgroundColor:'#ffffff',padding:10}}>
        <Grid item>
          <Typography type="title" style={{fontSize:'20px',fontWeight:'bold'}}>
            Search Filters
          </Typography>
        </Grid>
        <Grid item>
          <Typography type="caption" style={{color:'#1da1f2 '}}>
            . Show
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

Trends.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Trends);