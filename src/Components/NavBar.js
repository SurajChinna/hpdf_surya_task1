import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';


const styles = theme => ({ 

	appbar: {
		boxShadow: 'none',	
		backgroundColor: '#ffffff',
		color: '#1da1f2',
		boxShadow:'1px'
	},
	tab: {
		textTransform: 'none',
		minWidth: '0px',
	},
	search: {
		display:'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	},
	searchInput: {
		backgroundColor: "#f5f8fa",
		border: "1px solid #f5f8fa",
		borderRadius: "30px",
		minHeight: "30px"
	},
	button: {
		color: '#ffffff',
		backgroundColor: '#1da1f2',
		borderRadius: '25px',
		height:'30px',
		textTransform:'none',
		fontSize: '15px',
		fontWeight: 'bold'
	}

});

class NavBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static" className={classes.appbar}>
          	<Grid container direction="row" spacing="0">

	          <Grid item xs={1}>
	          </Grid>

	          <Grid item>
	          	<Tabs value={value} onChange={this.handleChange} indicatorColor="#1da1f2" style={{textTransform:'none'}}>
		          <Tab label="Home" className={classes.tab}/>
		          <Tab label="Moments" className={classes.tab}/>
		          <Tab label="Notifications" className={classes.tab}/>
		          <Tab label="Messages" className={classes.tab}/>
		        </Tabs>
	          </Grid>

	          <Grid item xs={2} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
	          <i className='fa fa-lg fa-twitter' aria-hidden='true' ></i>
	          </Grid>

	          <Grid item xs={1}>
	          </Grid>

	          <Grid item className={classes.search}>
	          	<input type="text" placeholder="   Search Twitter" className={classes.searchInput}/>
	          	<i className='fa fa-search' aria-hidden='true' style={{position:'absolute',left:'7em',color:'gray'}}></i>
	          </Grid>

	          <Grid item  style={{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:'15px',paddingRight:'15px'}}>
	          	<Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/890501599860097024/ENoCZc1q_400x400.jpg" />
	          </Grid>

	          <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
	          	<Button className={classes.button}>
        			Tweet
      			</Button>
	          </Grid>

	          <Grid item xs={1}>
	          </Grid>

	        


          	</Grid>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);