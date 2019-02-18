import React, { Component } from 'react'
import axios from 'axios';
import GoogleMaps from '../GoogleMaps/GoogleMaps';

class DetailsPage extends Component {
    constructor(props){
        super(props);
        this.state= [];
    }
    compnentDidMount(){
        this.getDetails();
    }

    getDetails = () => {
    const adventureId = this.props.match.params.id;
    axios({
        method:'GET',
        url:`/api/detail/${adventureId}`
    }).then((response)=>{
        this.setState(response.data)
    })

    }
  render() {
    return (
      <div>
      {JSON.stringify(this.props.match)}
        <h1>Details Page</h1>
        
        <GoogleMaps />


      </div>
    )
  }
}
export default DetailsPage