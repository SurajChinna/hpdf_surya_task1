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
  button: {
    color: '#1da1f2',
    backgroundColor: '#ffffff',
    border: '1px solid #1da1f2',
    borderRadius: '25px',
    height:'30px',
    textTransform:'none',
    fontSize: '13px',
    fontWeight: 'bold'
  },
  avatar: {
    width:50,
    height:50,
    marginTop: 7
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
                Who to follow
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" type="body2">
                <a href="#" style={{textDecoration:'none',color:'#1da1f2',fontSize:'13px',marginLeft:'-10px'}}>Refresh</a>
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="left" type="body2">
                <a href="#" style={{textDecoration:'none',color:'#1da1f2',fontSize:'13px'}}>View all</a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" style={{borderBottom:'1px solid #e6ecf0'}}>
            <Grid item xs={2}>
              <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/949134309432029185/_b1e1TZ8_bigger.jpg" className={classes.avatar} />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Grid container direction="row">
                    <Grid item>
                      <Typography align="left" type="body2" style={{fontWeight:'bold',color:'#1da1f2',fontSize:'14px',paddingLeft:10}}>
                        Pragya Jaiswal <i class="fa fa-check-circle" aria-hidden="true"></i>
                      </Typography>
                    </Grid>
                    <Grid item style={{paddingLeft:0}}>
                      <Typography  type="body2" style={{color:'gray',fontSize:'14px'}}>
                        @ItsMeP..
                        </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={{display:'flex',alignItems:'center',marginTop:'-15px',paddingLeft:20}}>
                  <Button className={classes.button}>
                    Follow
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="row" style={{borderBottom:'1px solid #e6ecf0'}}>
            <Grid item xs={2}>
              <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/904665470875254784/tic2KtpZ_bigger.jpg" className={classes.avatar} />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Grid container direction="row">
                    <Grid item>
                      <Typography align="left" type="body2" style={{fontWeight:'bold',color:'#1da1f2',fontSize:'14px',paddingLeft:10}}>
                        Varun Tej <i class="fa fa-check-circle" aria-hidden="true"></i>
                      </Typography>
                    </Grid>
                    <Grid item style={{paddingLeft:0}}>
                      <Typography  type="body2" style={{color:'gray',fontSize:'14px'}}>
                        @IamvarunTej..
                        </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={{display:'flex',alignItems:'center',marginTop:'-15px',paddingLeft:20}}>
                  <Button className={classes.button}>
                    Follow
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="row" style={{borderBottom:'1px solid #e6ecf0'}}>
            <Grid item xs={2}>
              <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/890501599860097024/ENoCZc1q_400x400.jpg" className={classes.avatar} />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Grid container direction="row">
                    <Grid item>
                      <Typography align="left" type="body2" style={{fontWeight:'bold',color:'#1da1f2',fontSize:'14px',paddingLeft:10}}>
                        Suraj Chinna <i class="fa fa-check-circle" aria-hidden="true"></i>
                      </Typography>
                    </Grid>
                    <Grid item style={{paddingLeft:0}}>
                      <Typography  type="body2" style={{color:'gray',fontSize:'14px'}}>
                        @IamSuraj..
                        </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={{display:'flex',alignItems:'center',marginTop:'-15px',paddingLeft:20}}>
                  <Button className={classes.button}>
                    Follow
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="row">
            <Grid item style={{paddingLeft:'10px',color:'#1da1f2'}}>
              <i class="fa fa-users" aria-hidden="true"></i>
            </Grid>
            <Grid item>
              <Typography type="caption" style={{color:'#1da1f2'}}>
                <a href="#" style={{textDecoration:'none',color:'#1da1f2'}}>Find people you know</a>
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