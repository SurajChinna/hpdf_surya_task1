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
  blue: {
  	backgroundColor:'#1da1f2',
  	height: '5em'
  },
  avatar: {
  	width:'70px',
  	height: '70px',
  	marginTop:'2em',
  	border: '3px solid #ffffff'
  }
});

function UserData(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item className={classes.blue}>
        	<Tooltip id="tooltip-icon" title="surajchinna" placement="bottom">
        		<Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/890501599860097024/ENoCZc1q_400x400.jpg" className={classes.avatar} />
        	</Tooltip>
        </Grid>

        <Grid item style={{backgroundColor:'#ffffff'}}>
        	<Grid container direction='row'>
        		<Grid item xs={4}>
        		</Grid>

        		<Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        			<Grid container direction='column'>
        				<Grid item>
        					<Typography type="title" style={{fontSize:'20px',fontWeight:'bold'}}>
        						surajchinna
        					</Typography>
        				</Grid>
        				<Grid item style={{marginTop:'-15px'}}>
        					<Typography type="caption">
        						@surajchinna
        					</Typography>
        				</Grid>
        		    </Grid>
        		</Grid>
        	</Grid>

        	<Grid container direction="row">
        		<Grid item xs={4} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        			<Grid container direction="column">
        				<Grid item>
        					<Typography type="caption" style={{fontWeight:'bold'}}>
        						Tweets
        					</Typography>
        				</Grid>
        				<Grid item>
        					<Typography style={{color:'#1da1f2'}}>
        						45
        					</Typography>
        				</Grid>
        			</Grid>
        		</Grid>
        		<Grid item xs={4} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        			<Grid container direction="column">
        				<Grid item>
        					<Typography type="caption" style={{fontWeight: 'bold'}}>
        						Following
        					</Typography>
        				</Grid>
        				<Grid item>
        					<Typography style={{color:'#1da1f2'}}>
        						887
        					</Typography>
        				</Grid>
        			</Grid>
        		</Grid>
        		<Grid item xs={4} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        			<Grid container direction="column">
        				<Grid item>
        					<Typography type="caption" style={{fontWeight:'bold'}}>
        						Followers
        					</Typography>
        				</Grid>
        				<Grid item>
        					<Typography style={{color:'#1da1f2'}}>
        						8867
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

UserData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserData);