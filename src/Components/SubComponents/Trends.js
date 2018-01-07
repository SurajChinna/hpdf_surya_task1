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
                Trends for you
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" type="body2">
                <a href="#" style={{textDecoration:'none',color:'#1da1f2'}}>change</a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="left" style={{color:'#1da1f2'}}>
                #LokSabha
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" type="caption" style={{marginTop:'-20px'}}>
                1,430 Tweets
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="left" style={{color:'#1da1f2'}}>
                #ThursdayThoughts
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" type="caption" style={{marginTop:'-20px'}}>
                2.4k Tweets
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="left" style={{color:'#1da1f2'}}>
                #AnilAmbaniGoldenMoment
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="left" style={{color:'#1da1f2'}}>
                Rs 500
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" type="caption" style={{marginTop:'-20px'}}>
                4.5k Tweets
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="left" style={{color:'#1da1f2'}}>
                #MyBirthdaySongTrailer
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="left" style={{color:'#1da1f2'}}>
                #UmarKhalid
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" type="caption" style={{marginTop:'-20px'}}>
                1,987 Tweets
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="left" style={{color:'#1da1f2'}}>
                #HuBaHu
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" type="caption" style={{marginTop:'-20px'}}>
                6,787 Tweets
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