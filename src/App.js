import React from 'react';
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer } from "react-mapbox-gl";
import { Sidebar, Tab } from 'react-leaflet-sidebarv2';
import './App.css';


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiY2xhcmtjYXJ0ZXIiLCJhIjoiY2lncTBtNjMyMDFvNHY2a29rOWdtY2RwaCJ9.TX02M_EHzs8lUyUacPrOdQ"
});

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     collapsed: false,
     selected: 'home',
   };
 }

 onClose() {
   this.setState({collapsed: true});
 }
 onOpen(id) {
   this.setState({
     collapsed: false,
     selected: id,
   })
 }

  render() {
    return (
      <div>
        <Sidebar id="sidebar" collapsed={this.state.collapsed} selected={this.state.selected}
        onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
          <Tab id="home" header="Home" icon="fa fa-home">
            <p>No place like home!</p>
          </Tab>
          <Tab id="settings" header="Settings" icon="fa fa-cog" anchor="bottom">
            <p>Settings dialogue.</p>
          </Tab>
        </Sidebar>
        <Map
          style="mapbox://styles/clarkcarter/cj9j4jh3ybgx42ss2qu1sse72"
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}
          zoom={[1]}>
          <Layer
            type="symbol"
            layout={{ "icon-image": "mountain-15" }}>
            <Feature coordinates={[151.2093,-33.8688]}/>
          </Layer>
        </Map>
      </div>
    );
  }
}

export default App;
