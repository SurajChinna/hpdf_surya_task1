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
    marginTop:20
  },
  
  avatar: {
    width:25,
    height:25,
  }

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
                Related articles
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" type="body2">
                <a href="#" style={{textDecoration:'none',color:'#1da1f2',fontSize:'13px',marginLeft:'-10px'}}>. View all</a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={{borderBottom:'1px solid #e6ecf0'}}>
          <Grid container direction="column">
            <Grid item>
            <Typography type="title" align="left" style={{fontSize:'16px',fontWeight:'bold'}}>
              Aadhaar whistleblower who first called UIDAI
            </Typography>
          </Grid>  

          <Grid item>
            <Typography type="caption" align="left" style={{fontSize:'15px'}}>
              JALANDHAR: Thirty-two-year-old Bharat Bhushan Gupta is the man who reported…
            </Typography>
          </Grid>

          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <Avatar alt="Remy Sharp" className={classes.avatar} src="https://pbs.twimg.com/profile_images/571293278281007104/a9uLp3Ae_normal.jpeg" />
              </Grid>
              <Grid item>
                <Typography type="title" align="left" style={{fontSize:'15px',fontWeight:'bold'}}>
                  The Tribune
                </Typography>
              </Grid>
              <Grid item>
                <Typography type="caption" align="right" style={{fontSize:'14px'}}>
                  Jan 10, 2018
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
        </Grid>

        <Grid item style={{borderBottom:'1px solid #e6ecf0'}}>
          <Grid container direction="column">
            <Grid item>
            <Typography type="title" align="left" style={{fontSize:'16px',fontWeight:'bold'}}>
              Aadhaar set to exorcise 80,000 ghost teachers - Times of India
            </Typography>
          </Grid>  

          <Grid item>
            <Typography type="caption" align="left" style={{fontSize:'15px'}}>
              India News: A major scam has come to light, with mandatory Aadhaar disclosure revealin…
            </Typography>
          </Grid>

          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <Avatar alt="Remy Sharp" className={classes.avatar} src="https://pbs.twimg.com/profile_images/781514680732749824/PG2_gebm_normal.jpg" />
              </Grid>
              <Grid item>
                <Typography type="title" align="left" style={{fontSize:'15px',fontWeight:'bold'}}>
                  Thimes of India
                </Typography>
              </Grid>
              <Grid item>
                <Typography type="caption" align="right" style={{fontSize:'14px'}}>
                  Jan 12, 2018
                </Typography>
              </Grid>
            </Grid>
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