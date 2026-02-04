import "./styles.css";
import Icon from "./Icon";
import { Marker, Popup } from "react-leaflet";
import positionsConst from "./positions";
export default function MarkerShrine({ position, state, name }) {
  return (
    <Marker position={position} icon={Icon()}>
      <Popup>
        <div className="items">
          <span className="text-[8px]">{state}</span>
          <span className="text-sm">{name}</span>
        </div>
      </Popup>
    </Marker>
  );
}
export function MarkersShrines() {
  return (
    <>
      {positionsConst.map((pos) => (
        <MarkerShrine {...pos} key={pos.name} />
      ))}
    </>
  );
}
