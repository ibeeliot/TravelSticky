// import React from "react";
// import React, { Component } from "react";
// useState from React is like setState and
import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

// this is a REACTMAP component. Look to react map gl component documentations
// the parameters are from the components
const App = () => {
  const [viewport, setViewport] = useState({
    // this state essentially helps render the "props" to be used later
    width: "100vw",
    height: "100vh",
    latitude: 75,
    longitude: -95.665,
    // zoom level => higher number equal closer zoom
    zoom: 6
  });

  // we'll use react hooks component useEffect only once

  // this is returning a REACT MAP GL component which contain the props given by App
  // mapStyle is a property linked to ReactMapGL
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/ibeeliot/ck6tji2l20dww1io61z8o7v2w"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    />
  );
};

export default App;
