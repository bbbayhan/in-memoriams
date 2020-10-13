import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import { ComponentData } from "./ComponentData";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYmVzdGViYXloYW4iLCJhIjoiY2tibm00NDB4MXUyNDJ5bDlqZGZ1ZjNpNCJ9.FP-7Bm0LzNmmnfxgQfzFMw";
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

const mockedData = require("./mockFile.json");

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 35.6412,
      lat: 40.0829,
      zoom: 5.3,
      markers: [],
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/bestebayhan/ckg6d615u4hbd19o8c6reznwr",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    this.setState({
      markers: mockedData.map((data) => {
        const placeholder = document.createElement("div");
        ReactDOM.render(<ComponentData data={data} />, placeholder);
        return new mapboxgl.Marker({ color: "#b40219" })
          .setLngLat(data.city)
          .setPopup(new mapboxgl.Popup().setDOMContent(placeholder))
          .addTo(map);
      }),
    });
  }

  render() {
    return (
      <div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById("app"));
