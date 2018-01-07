import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Grid from 'material-ui/Grid';
import Tooltip from 'material-ui/Tooltip';

const styles = theme => ({
  card: {
    boxShadow:'none'

  },
  media: {
    minHeight:'300px',  
  },
  avatar: {
    width:50,
    height:50
  }
  
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{marginTop:'20px'}}>
        <Grid container direction="column" >

          <Grid item>
            <Grid container direction="row" style={{padding:10,borderBottom:'1px solid #e6ecf0'}}>
              <Grid item xs={1}>
                <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/890501599860097024/ENoCZc1q_400x400.jpg" />
              </Grid>
              <Grid item xs={11} style={{position:'relative'}}>
                <input type="text" value="What's happening?" style={{width:'85%',color:'#1da1f2',padding:'10px 30px 10px 10px',border:'1px solid #e6ecf0',borderRadius:10}}/>
                <i class="fa fa-picture-o" aria-hidden="true" style={{position:'absolute',color:'#1da1f2',left:'22em',paddingTop:'8px'}}></i>
              </Grid>
              <Grid item>

              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container style={{borderBottom:'2px solid #e6ecf0'}}>
              <Grid item >
                <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/942089812974039040/o_G_OdE2_bigger.jpg" className={classes.avatar} />
              </Grid>
              <Grid item xs={10}>

                <Grid container direction="column">
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item>
                        <Typography align="left" type="body2" style={{fontWeight:'bold',color:'#1da1f2'}}>
                          KTR <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography  type="body2" style={{color:'gray'}}>
                          @KTRTRS . 34 m
                        </Typography>

                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                      <Typography align="left" type="body1">
                        Delighted that India’s 1st park dedicated for the differently abled is being unveiled in Hyderabad today<br /><br />
                        Built by GHMC with a cost of 2Cr at Malakpet. Also includes physiotherapy facilities for differently abled
                      </Typography>
                  </Grid>

                  <Grid item>
                    <Card className={classes.card}>
              
                    <CardMedia
                      className={classes.media}
                      image="https://pbs.twimg.com/media/DSwDslpU0AcCvhq.jpg"
                      title="Contemplative Reptile"
                    />
                    
                    <CardActions disableActionSpacing>
                      <Grid container direction="row">
                        <Grid item xs={2}>
                          <Tooltip id="tooltip-icon" title="Reply" placement="top">
                            <Grid container direction="row">
                              <Grid item><i class="fa fa-reply" aria-hidden="true"></i></Grid>
                              <Grid item>3</Grid>
                            </Grid>
                          </Tooltip>
                        </Grid>

                        <Grid item xs={2}>
                          <Tooltip id="tooltip-icon" title="ReTweet" placement="top">
                            <Grid container direction="row">
                              <Grid item><i class="fa fa-retweet" aria-hidden="true"></i></Grid>
                              <Grid item>45</Grid>
                            </Grid>
                          </Tooltip>
                        </Grid>

                        <Grid item xs={2}>
                          <Tooltip id="tooltip-icon" title="Like" placement="top">
                            <Grid container direction="row">
                              <Grid item><i class="fa fa-heart-o" aria-hidden="true"></i></Grid>
                              <Grid item>88</Grid>
                            </Grid>
                          </Tooltip>
                        </Grid>

                        <Grid item xs={2}>
                          <Tooltip id="tooltip-icon" title="Direct Message" placement="top">
                            <Grid container direction="row">
                              <Grid item><i class="fa fa-envelope-o" aria-hidden="true"></i></Grid>
                            </Grid>
                          </Tooltip>
                        </Grid>
                        
                      </Grid>
                    </CardActions>
              
                    </Card>
                  </Grid>
                </Grid>

                
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container style={{borderBottom:'2px solid #e6ecf0'}}>
              <Grid item >
                <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/765333670366355456/q5ACQ8i3_bigger.jpg" className={classes.avatar} />
              </Grid>
              <Grid item xs={10}>

                <Grid container direction="column">
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item>
                        <Typography align="left" type="body2" style={{fontWeight:'bold',color:'#1da1f2'}}>
                          npm, Inc <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography  type="body2" style={{color:'gray'}}>
                          @npmjs . 9 m
                        </Typography>

                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                      <Typography align="left" type="body1">
                        <span style={{color:'#1da1f2'}}>.@seldo</span> took a look at the state of javascript frameworks. first up: front-end.<br /><br />
                        <span style={{color:'#1da1f2'}}>buff.ly/2CiKTJT </span>
                      </Typography>
                  </Grid>

                  <Grid item>
                    <Card className={classes.card}>
              
                    <CardMedia
                      className={classes.media}
                      image="https://pbs.twimg.com/media/DSuWtNMUMAAmoKn.jpg"
                      title="Contemplative Reptile"
                    />
                    
                    <CardActions disableActionSpacing>
                      <Grid container direction="row">
                        <Grid item xs={2}>
                          <Tooltip id="tooltip-icon" title="Reply" placement="top">
                            <Grid container direction="row">
                              <Grid item><i class="fa fa-reply" aria-hidden="true"></i></Grid>
                              <Grid item>7</Grid>
                            </Grid>
                          </Tooltip>
                        </Grid>

                        <Grid item xs={2}>
                          <Tooltip id="tooltip-icon" title="ReTweet" placement="top">
                            <Grid container direction="row">
                              <Grid item><i class="fa fa-retweet" aria-hidden="true"></i></Grid>
                              <Grid item>12</Grid>
                            </Grid>
                          </Tooltip>
                        </Grid>

                        <Grid item xs={2}>
                          <Tooltip id="tooltip-icon" title="Like" placement="top">
                            <Grid container direction="row">
                              <Grid item><i class="fa fa-heart-o" aria-hidden="true"></i></Grid>
                              <Grid item>67</Grid>
                            </Grid>
                          </Tooltip>
                        </Grid>

                        <Grid item xs={2}>
                          <Tooltip id="tooltip-icon" title="Direct Message" placement="top">
                            <Grid container direction="row">
                              <Grid item><i class="fa fa-envelope-o" aria-hidden="true"></i></Grid>
                            </Grid>
                          </Tooltip>
                        </Grid>
                        
                      </Grid>
                    </CardActions>
              
                    </Card>
                  </Grid>
                </Grid>

                
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <i className='fa fa-lg fa-twitter' aria-hidden='true' style={{color:'#1da1f2'}}></i>
              </Grid>
              <Grid item>
                Back to Top <i class="fa fa-arrow-up" aria-hidden="true" ></i>
              </Grid>
            </Grid>
          </Grid>



        </Grid>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);