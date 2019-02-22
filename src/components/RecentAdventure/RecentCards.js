import React, { Component } from 'react'
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

//Material-UI components used for the Cards
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      minheight: 140,
    },
  };

  class RecentCards extends Component {
    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
      classes: PropTypes.object.isRequired,
    }

    constructor(props){
        super(props);
    }

    detailsPage = () => {
      console.log(this.props.item.id);
      this.props.history.push(`/adventure/${this.props.item.id}`);
    }
  render() {
      //This will display a card will all the project info.
    return (
       
      <Grid item lg={3}>
      <Card id ="project-card">
         <CardActionArea>
             <CardMedia 
                 component='img'
                 alt='image of project'
                 id='card-media'
                 image ={this.props.item.icon_url}
                 title={this.props.item.adventure_name}
             />
             <CardContent>
                <Typography id='project-title' variant="h6">
                {this.props.item.adventure_name}
                </Typography>
                <Typography id ='project-descrption' variant ="body1">
                {this.props.item.description}

                </Typography>
             </CardContent>
         </CardActionArea> 
         <CardActions>
                 <Button size="small" color="primary" id='detail-btn' value={this.props.item.id}
                 onClick ={this.detailsPage}>
                     Details
                 </Button>
             
         </CardActions>
      </Card>

      </Grid>
    )
  }
}

const NewRecentCards = withRouter(RecentCards);

const mapStoreToProps = reduxStore => ({
    reduxStore
  });
  
  export default connect(mapStoreToProps)(RecentCards);