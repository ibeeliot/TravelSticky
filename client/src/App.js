// import React from "react";
// import React, { Component } from "react";
// useState from React is like setState and
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

// importing listLogEntries function we created
import { listLogEntries } from "./API";

// this is a REACTMAP component. Look to react map gl component documentations
// the parameters are from the components
const App = () => {
  // react Hook destructuring as arrays. Use this syntax in order to destructure react components correctly
  // react Hook just has two components, a property and a function that sets that property's state
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [viewport, setViewport] = useState({
    // this state essentially helps render the "props" to be used later
    width: "100vw",
    height: "100vh",
    latitude: 39.8282,
    longitude: -98.5795,
    // zoom level => higher number equal closer zoom
    zoom: 4
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
  // you can do CSS calculations (but remember that in JSX, you have to do double {} for css properties in direct style)
  // REMEMBER that react only renders one div element, so multiple components need to be wrapped inside a main div component
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/ibeeliot/ck6txraky1w5p1ioyu648l89x"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      {logEntries.map(entry => (
        <div>
          <Marker
            key={entry._id}
            latitude={Number(entry.latitude)}
            longitude={Number(entry.longitude)}

            // offsetLeft={-12}
            // offsetTop={-24}
          >
            <svg
              className="marker"
              viewBox="0 0 24 24"
              style={{
                width: `${8 * viewport.zoom}`,
                height: `${8 * viewport.zoom}`
              }}
              stroke="#0000ff"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() =>
                // this will turn ALL showPopup instances (with their entry IDs) all to true
                setShowPopup({
                  ...showPopup,
                  [entry._id]: true
                })
              }
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </Marker>
          {showPopup[entry._id] ? (
            <Popup
              latitude={Number(entry.latitude)}
              longitude={Number(entry.longitude)}
              closeButton={true}
              closeOnClick={true}
              onClose={() => setShowPopup({ ...showPopup, [entry._id]: false })}
              anchor="top"
            >
              <div className="popup">
                <h3>
                  {entry.title}
                  <p>{entry.comments}</p>
                </h3>
              </div>
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default App;
