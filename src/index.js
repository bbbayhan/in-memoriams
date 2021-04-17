import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import {PlantData} from './PlantData';
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYmVzdGViYXloYW4iLCJhIjoiY2tibm00NDB4MXUyNDJ5bDlqZGZ1ZjNpNCJ9.FP-7Bm0LzNmmnfxgQfzFMw";
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;


const mockedData = require("./mockFile.json");


function getLocation(address){
  return fetch(`https://us1.locationiq.com/v1/search.php?key=pk.8da4fb69611cc5aa28e7f15b1fa05f27&q=${address}&countrycodes=tr&format=json`)
  .then(res => res.json())
  .then(
    (result) => [parseFloat(result[0].lon), parseFloat(result[0].lat)]
  )
}
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
        ReactDOM.render(<PlantData/>, placeholder);
        const forwardGeoLocation = Promise.resolve(getLocation("Mersin"));
        forwardGeoLocation.then((value)=>
         new mapboxgl.Marker({ color: "#b40219" })
          .setLngLat(value)
          .setPopup(new mapboxgl.Popup().setDOMContent(placeholder))
          .addTo(map)
        );
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
