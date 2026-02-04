import L from "leaflet";

export default function Icon() {
  return L.divIcon({
    className: "", // prevent default leaflet styles
    html: `
      <div
        style="
          width: 28px;
          height: 28px;
          background-color: #452000;
          color: white;
          border-radius: 9999px;
          display: grid;
          place-items: center;
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-flame-kindling"
        >
          <path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" />
          <path d="m5 22 14-4" />
          <path d="m5 18 14 4" />
        </svg>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 28], // bottom-center (corrected)
    popupAnchor: [0, -28],
  });
}
