import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
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
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100vh",
            width: "100vw"
        }}>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
          </Layer>
        </Map>
      </div>
    );
  }
}

export default App;
