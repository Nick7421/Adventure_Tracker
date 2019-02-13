import React, { Component } from 'react'
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

class RecentAdventure extends Component {
  render() {
    return (
      <div>
        <h1>Recent Adventures</h1>
        <LogOutButton className="log-in" />
      </div>
    )
  }
}
export default RecentAdventure;