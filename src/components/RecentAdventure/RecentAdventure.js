import React, { Component } from 'react'
import { connect } from "react-redux";

import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

class RecentAdventure extends Component {

  componentDidMount(){
    this.getRecent();
  }

  getRecent = () => {
    const action = {type:'GET_RECENT'};
    this.props.dispatch(action);
  }
  render() {
    return (
      <div>
        <h1>Recent Adventures</h1>
        {JSON.stringify(this.props.reduxStore.recentReducer)}
      </div>
    )
  }
}
const mapStoreToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStoreToProps)(RecentAdventure);