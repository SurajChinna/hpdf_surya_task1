import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import SearchFilters from './SubComponents/SearchFilters.js'
import RelatedSearches from './SubComponents/RelatedSearches.js'
import Follow from './SubComponents/Follow.js'
import Trends from './SubComponents/Trends.js'
import Policy from './SubComponents/Policy.js'





const styles = theme => ({
  root: {
  	marginTop:20,
  	backgroundColor:"#e6ecf0"
  },
});

function SearchLeftPane(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="column" >
        <Grid item >
        	<SearchFilters />
        </Grid>

        <Grid item style={{marginTop:10}}>
        	<RelatedSearches />
        </Grid>

        <Grid item style={{marginTop:10}}>
          <Follow />
        </Grid>

        <Grid item style={{marginTop:10}}>
          <Trends />
        </Grid>

        <Grid item style={{marginTop:10}}>
          <Policy />
        </Grid>

      </Grid>
    </div>
  );
}

SearchLeftPane.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchLeftPane);