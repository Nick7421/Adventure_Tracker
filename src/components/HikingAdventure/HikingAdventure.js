import React, { Component } from 'react'
import { connect } from "react-redux";
import HikingCards from './HikingCards';

import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";


class HikingAdventure extends Component {
  componentDidMount(){
    this.getHiking();
  }

  getHiking = () => {
    const action = {type:'GET_HIKING'};
    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        <h1>Hiking Adventures</h1>
        <Paper id="adventure" elevation={3}>
          <Grid container spacing={32}>
            {this.props.reduxStore.hikingReducer.map(hike => (
              <HikingCards key={hike.id} hike={hike} />
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

export default connect(mapStoreToProps)(HikingAdventure);