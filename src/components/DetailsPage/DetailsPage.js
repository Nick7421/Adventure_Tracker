import React, { Component } from 'react'
import axios from 'axios';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import DetailsItem from './DetailsItem';
import Grid from '@material-ui/core/Grid';


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
       <Grid container
  spacing={0}
  direction="row"
  alignItems="center"
  justify="center"
  style={{ minHeight: '15px' }}>
      <Grid item lg={12} zeroMinWidth>
      <h1>Details Page</h1>
      </Grid>
      <Grid item lg={12} zeroMinWidth>
      <DetailsItem item = {this.state.data} />
      </Grid>
      <Grid item lg={12} zeroMinWidth>
      <GoogleMaps item = {this.state.data}/>
      </Grid>
      
    
        
</Grid>

      </div>
    )
  }
}
export default DetailsPage