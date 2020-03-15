import React from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import "./MapComponent.css";
import SearchMap from "./SearchMap";
import gps from "../images/gps.jpg";
import L from "leaflet";
import LCG from "leaflet-control-geocoder";

class MapComponent extends React.Component {
  state = {
    address: null
  };

  _getAddressByLatLng = latLng => {
    // get address using geocoder reverse method
    const map = this.leafletMap.leafletElement;
    this.geocoder.reverse(
      latLng,
      map.options.crs.scale(map.getZoom()),
      results => {
        var r = results[0];
        if (r) {
          this.setState({ address: r.name });
        } else {
          this.setState({ address: "no address found" });
        }
      }
    );
  };

  componentDidMount() {
    /* Get address from lat lng on componentDidMount
      to use it in marker popup and card description 
    */
    const { center } = this.props;
    this.geocoder = L.Control.Geocoder.nominatim();
    const latLng = L.latLng(center[0], center[1]);

    this._getAddressByLatLng(latLng);
  }

  componentDidUpdate(prevProps) {
    // Set the address if center prop changes
    const { center } = this.props;
    const { center: prevCenter } = prevProps;

    if (center !== prevCenter) {
      const latLng = L.latLng(center[0], center[1]);
      this._getAddressByLatLng(latLng);
    }
  }

  render() {
    const {
      handleViewportChanged = () => {}, // no-op if component doesn't use this method
      center,
      mapTitle,
      isCurrentLocation,
      onGetLocationClick
    } = this.props;

    const { address } = this.state;

    return (
      <div className="card">
        <Map
          onViewportChanged={handleViewportChanged}
          center={center}
          zoom={12}
          ref={m => {
            this.leafletMap = m;
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>{address}</Popup>
          </Marker>
          {/* Show Search bar only for your location component 
              Search component goes as a child to map component
          */}
          {isCurrentLocation && <SearchMap />}
        </Map>
        <div className="cardBody">
          <h4 className="cardBodyTitle">
            <b>{mapTitle}</b>
          </h4>
          {isCurrentLocation ? (
            // Show button get current location's antipode only on your location component
            <button
              className="gpsButton tooltip expand"
              onClick={onGetLocationClick}
              data-title="Get antipode of your location!"
            >
              <img className="gpsIcon" src={gps} alt="GPS" />
            </button>
          ) : null}
          {/* Map body */}
          <p>
            Co ordinates : <span>{center[0] + " , " + center[1]}</span>
          </p>
          <p>
            Address :<span>{address}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default MapComponent;
