import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './App.css';

const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [39.9528, -75.1638];
const zoomLevel = 2;

class App extends React.Component {
  render() {
    return (
      <div>
        <Map
            center={mapCenter}
            zoom={zoomLevel}
        >
            <TileLayer
                attribution={stamenTonerAttr}
                url={stamenTonerTiles}
            />
        </Map>
      </div>
    );
  }
}

export default App;
