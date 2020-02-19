// import React from "react";
// import React, { Component } from "react";
import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

// this is a REACTMAP component. Look to react map gl component documentations
// the parameters are from the components
const App = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  // this is returning a REACT MAP GL component which contain the props given by App
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    />
  );
};

export default App;
