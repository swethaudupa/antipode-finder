import { withLeaflet, MapControl } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";

class SearchMap extends MapControl {
  // Using leaflet-geosearch to implement search location on map component
  createLeafletElement() {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider: provider,
      position: "topleft",
      style: "bar",
      showMarker: false,
      showPopup: false,
      autoClose: true,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: true,
      searchLabel: "Enter country/ city/ address/ lat,lng "
    });
    return searchControl;
  }

  componentDidMount() {
    const { leaflet } = this.props;
    const { map } = leaflet;
    map.addControl(this.leafletElement);
  }
}

export default withLeaflet(SearchMap);
