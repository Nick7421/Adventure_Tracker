import React, { Component } from 'react'
import { connect } from "react-redux";

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
        {JSON.stringify(this.props.reduxStore.hikingReducer)}
      </div>
    )
  }
}
const mapStoreToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStoreToProps)(HikingAdventure);