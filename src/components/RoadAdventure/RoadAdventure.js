import React, { Component } from 'react'
import { connect } from "react-redux";

import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

import RoadCards from './RoadCards';

class RoadAdventure extends Component {
  componentDidMount(){
    this.getRoad();
  }

  getRoad = () => {
    const action = {type:'GET_ROAD'};
    this.props.dispatch(action);
  }
  render() {
    return (
      <div>
      
      <h1>Road Adventures</h1>
      <Paper id="adventure" elevation={3}>
          <Grid container spacing={32}>
            {this.props.reduxStore.roadReducer.map(road => (
              <RoadCards key={road.id} road={road} history={this.props.history} />
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

export default connect(mapStoreToProps)(RoadAdventure);