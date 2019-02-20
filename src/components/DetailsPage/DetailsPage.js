import React, { Component } from 'react'
import axios from 'axios';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import DetailsItem from './DetailsItem';

class DetailsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          data: []
        };
    }
    componentDidMount(){
        this.getDetails();
    }

    getDetails = () => {
    const id = this.props.match.params.id;
    console.log('int get details');
    axios({
        method:'GET',
        url: `/api/detail/${id}`
    }).then((response) => {
      console.log(response.data);
        this.setState({
          data:response.data,
        })
    })

    }
  render() {
    return (
      <div>
      {JSON.stringify(this.props.match.params.id)}
      {JSON.stringify(this.state)}
      

        <h1>Details Page</h1>
        <DetailsItem item = {this.state.data} />
        <GoogleMaps item = {this.state.data}/>


      </div>
    )
  }
}
export default DetailsPage