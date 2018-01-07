import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import MoreOption from './SubComponents/MoreOption.js';


const styles = theme => ({
  card: {
    boxShadow:'none',
  },
  media: {
    height: 300,
  },
  avatar: {
    width:25,
    height: 25
  },
  feedAvatar: {
    width:50,
    height:50
  },

  cover1: {
    background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYJev6OYWfy_8wZk4ixefN55JBJoeiZoa2oVTHKGwiZ4YWjIe)',
    height: '5em',
    marginLeft:8
  },
  cover2: {
    background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35d5FI-CA_cxUctt2v0ZBEnCbFTYF6FjqjqgZxxmdg48tCYApEA)',
    height: '5em',
    marginRight:8
  },
  avatarPeople: {
    width:'70px',
    height: '70px',
    marginTop:'2em',
    border: '3px solid #ffffff'
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

});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container direction="column" style={{marginTop:20}}>

          <Grid item style={{backgroundColor:"#e6ecf0"}}>
            <Grid container direction="row">
              <Grid item xs={6}>
                <Typography type="title" align="left" style={{fontWeight:'bold'}}>
                  Top News
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography type="caption" align="right" style={{color:'#1da1f2'}}>
                  View all
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{marginTop:'-20px'}}>
            <Card className={classes.card}>

              <CardMedia
                className={classes.media}
                image="data:image/jpeg;base64,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"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography component="p" align="left">
                  Gaping holes in data security and the unreliability of biometrics put a question mark on the project. UIDAI’s denials are increasingly unconvincing
                </Typography>
              </CardContent>
          
            </Card>
            <Grid container direction="row" style={{padding:10}}>
              <Grid item xs={1}>
                <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/813663483786989568/M_vF6Xwy_normal.jpg" className={classes.avatar} />
              </Grid>
              <Grid item xs={4}>
                <Typography type="title" style={{fontSize:18}}>
                  Economic Times
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography type="caption" align="right">
                  Jan 05, 2018
                </Typography>
              </Grid>
            </Grid>
              
          </Grid>

          <Grid item>
            <Typography type="caption" style={{backgroundColor:'#f5f8fa',padding:10,color:'#1da1f2',borderTop:'1px solid #e6ecf0'}}>
              295 new results
            </Typography>
          </Grid>

          <Grid item style={{borderTop:'20px solid #e6ecf0'}}>
            <Grid container direction="row" spacing={24}>
              <Grid item xs={6} >
                <Grid container direction="column">
                  <Grid item className={classes.cover1}>
                    <Tooltip id="tooltip-icon" title="surajchinna" placement="bottom">
                      <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/877766037051068418/Q_WeALeS_bigger.jpg" className={classes.avatarPeople} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item xs={6}>
                      </Grid>
                      <Grid item xs={4}>
                        <Button className={classes.button}>
                          Follow
                        </Button>
                      </Grid>
                      <Grid item xs={1}>
                        <MoreOption />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item style={{paddingLeft:20}}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography align="left" type="body2" style={{fontWeight:'bold',color:'#1da1f2'}}>
                          Aadhaar <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </Typography>
                        <Typography  type="body2" align="left" style={{color:'gray'}}>
                          @UIDAI
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography type="body1" align="left" style={{fontSize:'16px'}}>
                          Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements.
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography type="caption" align="left">
                          Followed by <span style={{color:'#1da1f2'}}>Andhra Pradesh CM</span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} style={{borderLeft:'10px solid #e6ecf0'}}>
                <Grid container direction="column">
                  <Grid item className={classes.cover2}>
                    <Tooltip id="tooltip-icon" title="surajchinna" placement="bottom">
                      <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/718314653181427716/9gKTzW1d_bigger.jpg" className={classes.avatarPeople} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item xs={5}>
                      </Grid>
                      <Grid item xs={4}>
                        <Button className={classes.button}>
                          Follow
                        </Button>
                      </Grid>
                      <Grid item xs={1}>
                        <MoreOption />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item >
                    <Grid container direction="column">
                      <Grid item>
                        <Typography align="left" type="body2" style={{fontWeight:'bold',color:'#1da1f2'}}>
                          PMO India <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </Typography>
                        <Typography  type="body2" align="left" style={{color:'gray'}}>
                          @PMOIndia
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography type="body1" align="left" style={{fontSize:'16px'}}>
                          Office of the Prime Minister of India<br /><br /><br />
                        </Typography>
                      </Grid>
                                            <Grid item>
                        <Typography type="caption" align="left">
                          Followed by <span style={{color:'#1da1f2'}}>Hasura Education</span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Grid>

        {/*Feed*/}
          <Grid item>
            <Grid container style={{borderTop:'5px solid #e6ecf0'}}>
              <Grid item >
                <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/942089812974039040/o_G_OdE2_bigger.jpg" className={classes.feedAvatar} />
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
                        Sharing aadhaar numbers is not dangerous: UIDAI.<br /><br />

                        But it is an offence punishable with upto 3 years imprisonment. : Also, UIDAI.
                      </Typography>
                  </Grid>

                  <Grid item>
                    <Card className={classes.card}>
                    
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
            <Grid container style={{borderTop:'5px solid #e6ecf0'}}>
              <Grid item >
                <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/930611129281335296/Kah1d0lC_bigger.jpg" className={classes.feedAvatar} />
              </Grid>
              <Grid item xs={10}>

                <Grid container direction="column">
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item>
                        <Typography align="left" type="body2" style={{fontWeight:'bold',color:'#1da1f2'}}>
                          doorku
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography  type="body2" style={{color:'gray'}}>
                          @Dorkstar . Jan 4
                        </Typography>

                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                      <Typography align="left" type="body1">
                      News: "Aadhaar breached. Data stolen" <br />
                      *UIDAI checks system* <br /><br />
                      UIDAI: Arey all data is here only. Nothing has been stolen
                      </Typography>
                  </Grid>

                  <Grid item>
                    <Card className={classes.card}>
                    
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

        </Grid>

      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);