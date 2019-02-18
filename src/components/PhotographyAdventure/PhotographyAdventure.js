import React, { Component } from 'react'
import { connect } from "react-redux";

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
        {JSON.stringify(this.props.reduxStore.photographyReducer)}
      </div>
    )
  }
}
const mapStoreToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStoreToProps)(PhotographyAdventure);