import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYmVzdGViYXloYW4iLCJhIjoiY2tibm00NDB4MXUyNDJ5bDlqZGZ1ZjNpNCJ9.FP-7Bm0LzNmmnfxgQfzFMw";
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 35.6412,
      lat: 40.0829,
      zoom: 5.3,
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }
  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById("app"));
