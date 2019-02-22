import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMaps extends Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  onMarkerClick = (data) => (props, marker, e) => {
    console.log('imgPath',data.img_url);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      imgPath:data.img_url,
    });
  }

  onMapClicked = (props) => {
    console.log(props);
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  render() {
    console.log(this.props.item);
    const style = {
      width: '960px',
      height: '300px',
      'marginLeft': '125px',
    }
    return (
      <div>
        {/* {JSON.stringify(this.state.showingInfoWindow)} */}
        <Map
      style = {style} 
      google={this.props.google}
      zoom = { 4 }
      initialCenter={{
            lat: 37.2690488,
            lng: -112.9556537
          }}
          onClick={this.onMapClicked}>
          {this.props.item.map((data, i) => (
            <Marker
              title="Location"
              id={i}
              onClick={this.onMarkerClick(data)}
              position={{lat:Number(data.latitude),lng:Number(data.longitude)}}
              >
              
            </Marker>
            
          ))}
          <InfoWindow
                visible={this.state.showingInfoWindow}
                position={this.state.selectedPlace.position}
                >
                  <div >
                  <img src={this.state.imgPath} alt="image" height="200" width="300"/>
                  </div>
              </InfoWindow>
      </Map>
      </div>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAyVH8OEBQ2Y8w7htJHLZUUI0L_x-7HAIw')
})(GoogleMaps)