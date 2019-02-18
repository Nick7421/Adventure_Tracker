import React, { Component } from 'react'
import { connect } from "react-redux";

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
      {JSON.stringify(this.props.reduxStore.roadReducer)}
        
      </div>
    )
  }
}

const mapStoreToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStoreToProps)(RoadAdventure);