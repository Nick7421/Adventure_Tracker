import React, { Component } from 'react'
import { connect } from "react-redux";

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
        {JSON.stringify(this.props.reduxStore.dualSportReducer)}
      </div>
    )
  }
}

const mapStoreToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStoreToProps)(DualSportAdventure);