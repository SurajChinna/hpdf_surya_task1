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
      <Grid container direction="column" style={{backgroundColor:'#ffffff'}}>

        <Grid item style={{padding:10}}>
          <Typography type="caption" align="left">
          © 2018 Twitter About Help Center Terms Privacy policy Cookies Ads info Brand Blog Status Apps Jobs Marketing Businesses Developers  
          </Typography>
        </Grid>

        <Grid item style={{border:'1px solid #e6ecf0'}}>
          <Grid container direction="row">
            <Grid item style={{paddingLeft:'10px',color:'#1da1f2'}}>
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </Grid>
            <Grid item>
              <Typography type="caption" style={{color:'#1da1f2'}}>
                <a href="#" style={{textDecoration:'none',color:'#1da1f2'}}>Advertise with Twitter</a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>


      </Grid>
    </div>
  );
}

Trends.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Trends);