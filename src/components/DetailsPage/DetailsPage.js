import React, { Component } from 'react'
import axios from 'axios';
import GoogleMaps from '../GoogleMaps/GoogleMaps';

class DetailsPage extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    compnentDidMount(){
        this.getDetails();
    }

    getDetails = (action) => {
    const Id = action.payload;
    axios({
        method:'GET',
        url:`/api/detail/${Id}`
    }).then((response)=>{
      console.log(response.data);
        this.setState(response.data);
    })

    }
  render() {
    return (
      <div>
      {JSON.stringify(this.props.match.params.id)}
      {JSON.stringify(this.state)}
        <h1>Details Page</h1>
        
        <GoogleMaps />


      </div>
    )
  }
}
export default DetailsPage