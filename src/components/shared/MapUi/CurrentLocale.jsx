import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import LocaleIcon from "./LocaleIcon";
export default function CurrentLocale() {
  const [position, setPos] = useState(null);
  const map = useMap();
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setPos(coords);
      },
      (err) => {
        console.warn("Location error:", err);
      },
      { enableHighAccuracy: true },
    );
  }, [map]);
  if (!position) return null;

  if (position !== null)
    return (
      <Marker position={position} icon={LocaleIcon()}>
        <Popup>Aqui estas tu</Popup>
      </Marker>
    );
  return null;
}
