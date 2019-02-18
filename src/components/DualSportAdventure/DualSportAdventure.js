import React, { Component } from 'react'
import { connect } from "react-redux";
import DualSportCards from './DualSportCards';

import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

class DualSportAdventure extends Component {

  componentDidMount(){
    this.getDualSport();
  }

  getDualSport = () => {
    const action = {type:'GET_DUALSPORT'};
    this.props.dispatch(action);
  }
  render() {
    return (
      <div>
        <h1>Dual-Sport Adventure</h1>
        <Paper id="adventure" elevation={3}>
          <Grid container spacing={32}>
            {this.props.reduxStore.dualSportReducer.map(dualsport => (
              <DualSportCards key={dualsport.id} dualsport={dualsport} />
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

export default connect(mapStoreToProps)(DualSportAdventure);