import { useMap } from "react-leaflet";
import { Minus, Plus } from "lucide-react";
export default function Marker() {
  const map = useMap();
  return (
    <div
      className={
        "z-500 absolute top-[5%] left-[2%] text-white flex flex-col gap-y-2"
      }
    >
      <button
        className="bg-dark-accent p-1 rounded-full"
        onClick={() => map.zoomIn()}
      >
        <Plus />
      </button>
      <button
        className="bg-dark-accent p-1 rounded-full"
        onClick={() => map.zoomOut()}
      >
        <Minus />
      </button>
    </div>
  );
}
