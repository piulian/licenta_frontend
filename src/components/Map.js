import React, { Component } from 'react';
import { compose, withStateHandlers } from "recompose";
import { withGoogleMap, withScriptjs, GoogleMap, Marker} from 'react-google-maps';

import bus from './bus.svg';

class Map extends Component {

   // _onClick = ({x, y, lat, lng, event}) => alert(x);

    render() {

        const Map = compose(
            withStateHandlers(() => ({
                isMarkerShown: false,
                markerPosition: null
                }), {
                onMapClick: ({ isMarkerShown }) => (e) => ({
                    markerPosition: e.latLng,
                    isMarkerShown:true
                })
            }),

            withScriptjs,
            withGoogleMap
            )

        (props =>
            <GoogleMap
                defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
                defaultZoom = { 13 }
                onClick={props.onMapClick}
            >

                {props.isMarkerShown &&
                <Marker
                    icon={{
                        url: bus,
                        size: {width: 60, height: 100},
                        anchor: {x: 15, y: 50},
                        scaledSize: {width: 30, height: 50},
                    }}
                    position={{ lat: 40.756795, lng: -73.954298 }}

                />}
            </GoogleMap>
        );
        return(
            <div style={{ height: '100%' }}>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
};
export default Map;