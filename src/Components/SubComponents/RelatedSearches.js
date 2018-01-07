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
      <Grid container direction="column" style={{backgroundColor:'#ffffff',padding:10}}>

        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <Typography align="left" type="subheading" style={{fontWeight:'bold'}}>
                Related Searches
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography align="left" style={{color:'#1da1f2'}}>
                #UmarKhalid
              </Typography>
        </Grid>

        <Grid item>
          <Typography align="left" style={{color:'#1da1f2'}}>
                opposition
              </Typography>
        </Grid>


        <Grid item>
          <Typography align="left" style={{color:'#1da1f2'}}>
                #mangalaru
              </Typography>
        </Grid>

        <Grid item>
          <Typography align="left" style={{color:'#1da1f2'}}>
                deepak rao
              </Typography>
        </Grid>

        <Grid item>
          <Typography align="left" style={{color:'#1da1f2'}}>
                #flipkart
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