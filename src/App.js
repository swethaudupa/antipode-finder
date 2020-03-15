import React, { useState, useEffect } from "react";
import "./App.css";
import MapComponent from "./components/MapComponent";

const _getAntipodeLat = lat => lat * -1;
const _getAntipodeLng = lng => (lng > 0 ? lng - 180 : lng + 180);

function App() {
  const [currentLocation, setCurrentLocation] = useState([45.4, -75.7]);
  const [antipodeLocation, setAntipodeLocation] = useState([45.4, -75.7]);

  useEffect(() => {
    // Using useEffect to set antipode location only after current location is set
    let currentLat = currentLocation[0];
    let currentLng = currentLocation[1];
    // helper functions to calculate antipode lat & lng
    let antipodeLat = _getAntipodeLat(currentLat);
    let antipodeLong = _getAntipodeLng(currentLng);
    setAntipodeLocation([antipodeLat, antipodeLong]);
  }, [currentLocation]);

  const handleViewportChanged = viewport => {
    // onViewportChange (when position on map change), set currentLocation
    setCurrentLocation(viewport.center);
  };

  const onGetLocationClick = () => {
    //get user's current location using geolocation and set it in component state
    let userLocation = [];
    var getPosition = function(options) {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    };
    getPosition()
      .then(position => {
        userLocation.push(position.coords.latitude);
        userLocation.push(position.coords.longitude);
        setCurrentLocation(userLocation);
      })
      .catch(err => {
        throw new Error(err.message);
      });
  };

  return (
    <div className="mapContainer">
      <MapComponent
        onGetLocationClick={onGetLocationClick}
        mapTitle="Your Location"
        center={currentLocation}
        isCurrentLocation={true}
        handleViewportChanged={handleViewportChanged}
      />
      <MapComponent
        mapTitle="Antipodes Location"
        center={antipodeLocation}
        isCurrentLocation={false}
      />
    </div>
  );
}

export default App;
