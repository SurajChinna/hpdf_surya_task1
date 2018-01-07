import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import MoreOption from './MoreOption.js'


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

	          <Grid item xs={9}>
	          	<Tabs value={value} onChange={this.handleChange} indicatorColor="#1da1f2" style={{textTransform:'none'}}>
		          <Tab label="Top" className={classes.tab}/>
		          <Tab label="Latest" className={classes.tab}/>
		          <Tab label="People" className={classes.tab}/>
		          <Tab label="Photos" className={classes.tab}/>
		          <Tab label="Videos" className={classes.tab}/>
		          <Tab label="News" className={classes.tab}/>

		        </Tabs>
	          </Grid>

	          <Grid item alignItems="flex-end" style={{paddingLeft:80}}>
	          	<MoreOption />
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