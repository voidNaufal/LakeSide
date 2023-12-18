import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../../pages/Kontak/Kontak.css";

const position = [-6.964476, 107.611542];

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = () => (
  <MapContainer
    className="map-action"
    center={position}
    zoom={13}
    zoomControl={false}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=04wbwrkm7PsouafuQ1RN"
    />
    <ZoomControl position="bottomright" />
    <Marker position={position}>
      <Popup>LakeSide</Popup>
    </Marker>
  </MapContainer>
);

export default Map;
