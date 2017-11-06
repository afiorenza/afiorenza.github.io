import React from 'react';
import {compose, withProps } from 'recompose';
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export const MapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDoLwUFF-bxfdb7ehNxugr87TvKvegI-Uo&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{
      lat: -32.744,
      lng: -60.727
    }}
  />
)

export default MapComponent;
