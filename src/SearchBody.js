import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Feed from './Components/Feed.js';
import SearchLeftPane from './Components/SearchLeftPane.js'
import SearchFeed from './Components/SearchFeed.js'
import RightPane from './Components/RightPane.js';
import RelatedArticles from './Components/SubComponents/RelatedArticles.js';

const styles = theme => ({
  root: {   
    paddingTop:'0px',
    marginTop:'0px'
  },
  paper: {
    textAlign: 'center',
    boxShadow: 'none'
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        
        <Grid item xs={1}>
        </Grid>

        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={3}>
              <Paper className={classes.paper}><SearchLeftPane /></Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper className={classes.paper}><SearchFeed /></Paper>
            </Grid>

            <Grid item xs={3}>
              <Paper className={classes.paper}><RelatedArticles /></Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={1}>
        </Grid>


        
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);