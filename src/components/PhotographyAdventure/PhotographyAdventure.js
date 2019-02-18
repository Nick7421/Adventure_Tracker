import React, { Component } from 'react'
import { connect } from "react-redux";
import PhotographyCards from './PhotographyCards';

import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

class PhotographyAdventure extends Component {
  componentDidMount(){
    this.getPhotography();
  }

  getPhotography = () => {
    const action = {type:'GET_PHOTOGRAPHY'};
    this.props.dispatch(action);
  }
  render() {
    return (
      <div>
        <h1>Photography Adventures</h1>
        <Paper id="adventure" elevation={3}>
          <Grid container spacing={32}>
            {this.props.reduxStore.photographyReducer.map(photo => (
              <PhotographyCards key={photo.id} photo={photo} history={this.props.history} />
            ))}
          </Grid>
        </Paper>
      </div>
    )
  }
}
const mapStoreToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStoreToProps)(PhotographyAdventure);