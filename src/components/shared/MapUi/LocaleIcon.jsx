import L from "leaflet";

export default function LocateIcon() {
  return L.divIcon({
    className: "",
    html: `
      <div
        style="
          width: 28px;
          height: 28px;
          background-color: #2563eb; /* nice blue */
          color: white;
          border-radius: 9999px;
          display: grid;
          place-items: center;
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-locate"
        >
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <circle cx="12" cy="12" r="7" />
        </svg>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 28], // bottom-center
    popupAnchor: [0, -28],
  });
}
