// import React from "react";
// import React, { Component } from "react";
// useState from React is like setState and
import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

// importing listLogEntries function we created
import { listLogEntries } from "./API";

// this is a REACTMAP component. Look to react map gl component documentations
// the parameters are from the components
const App = () => {
  // react Hook destructuring as arrays. Use this syntax in order to destructure react components correctly
  const [logEntries, setLogEntries] = useState([]);
  const [viewport, setViewport] = useState({
    // this state essentially helps render the "props" to be used later
    width: "100vw",
    height: "100vh",
    latitude: 75,
    longitude: -95.665,
    // zoom level => higher number equal closer zoom
    zoom: 3
  });

  // we'll use react hooks component useEffect only once
  // inside class so we can class syntax structure
  // this is a ASYNC process so we'll need to use await on it in order to catch the data approrpriately
  // this is a fetch coming from ./api.js
  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      // setLogEntries will update logEntries (we destructured it near the top) as we go throughough useEffect
      // logEntries will then be a usable array
      setLogEntries(logEntries);
      console.log("this is your logEntries", logEntries);
    })();
  }, []);
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
