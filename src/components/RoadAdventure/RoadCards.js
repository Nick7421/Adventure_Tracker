import React, { Component } from 'react'
import { connect } from 'react-redux';

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

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };

  class RoadCards extends Component {
    constructor(props){
        super(props);
    }

    detailsPage = () => {
        console.log(this.props.road.id);
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
                 image ={this.props.road.icon_url}
                 title={this.props.road.adventure_name}
             />
             <CardContent>
                <Typography id='project-title' variant="h6">
                {this.props.road.adventure_name}
                </Typography>
                <Typography id ='project-descrption' variant ="body1">
                {this.props.road.description}

                </Typography>
             </CardContent>
         </CardActionArea> 
         <CardActions>
                 <Button size="small" color="primary" id='detail-btn' value={this.props.road.id}
                 onClick ={this.detailsPage}>
                     Details
                 </Button>
             
         </CardActions>
      </Card>

      </Grid>
    )
  }
}
const mapStoreToProps = reduxStore => ({
    reduxStore
  });
  
  export default connect(mapStoreToProps)(RoadCards);