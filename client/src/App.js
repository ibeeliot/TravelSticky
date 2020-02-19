// import React from "react";
// import React, { Component } from "react";
// useState from React is like setState and
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

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
    latitude: 39.8282,
    longitude: -98.5795,
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
      // if logic was inside the empty array, then setLogEntries will run everytime instead of just running once
      setLogEntries(logEntries);
      console.log("this is your logEntries", logEntries);
    })();
  }, []);
  // this is returning a REACT MAP GL component which contain the props given by App
  // mapStyle is a property linked to ReactMapGL
  // when returning the body of the react component, be sure to include the entry(whatever you it read as input)
  // we're returning a Marker component and inside of that marker component, we're placing a svg inside
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/ibeeliot/ck6txraky1w5p1ioyu648l89x"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      {logEntries.map(entry => (
        <Marker
          key={entry._id}
          latitude={parseInt(entry.latitude)}
          longitude={parseInt(entry.longitude)}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <svg
            viewBox="0 0 24 24"
            width="100"
            height="100"
            stroke="#FF5733"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default App;
