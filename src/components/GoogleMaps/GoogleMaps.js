import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 4
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ marginLeft:'125px',height: '400px', width: '75%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAyVH8OEBQ2Y8w7htJHLZUUI0L_x-7HAIw'  }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Test'}
          />
        </GoogleMapReact>
        </div>
    )
  }
}
        export default SimpleMap;