const mexico_position = [19.404027289630758, -99.88442034581396];
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Controls from "./Controls";
import { useIsDesktop } from "./hooks/useIsDekstop";
import CurrentLocale from "./CurrentLocale";
import { MarkersShrines } from "./Marker";
export default function Map() {
  const isDesktop = useIsDesktop();
  return (
    <MapContainer
      center={mexico_position} // Mexico
      zoom={isDesktop ? 8 : 6}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", zIndex: 0 }}
      zoomControl={false}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <CurrentLocale />
      <MarkersShrines />
      <Controls />
    </MapContainer>
  );
}
