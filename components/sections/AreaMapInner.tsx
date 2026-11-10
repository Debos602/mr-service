"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import { areas, mapView } from "@/lib/content";

function pinIcon(label: string) {
  return L.divIcon({
    className: "bg-transparent border-none",
    iconSize: [0, 0],
    html: `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;transform:translate(-50%,-100%);cursor:pointer;">
        <div style="background:#fff;border:1px solid #e2e8f0;color:#0f172a;font-size:11px;font-weight:800;padding:4px 8px;border-radius:8px;box-shadow:0 10px 15px -3px rgba(0,0,0,.1);margin-bottom:2px;white-space:nowrap;">${label}</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 4px 4px rgba(0,0,0,.3));">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      </div>`,
  });
}

export default function AreaMapInner() {
  return (
    <MapContainer
      center={mapView.center}
      zoom={mapView.zoom}
      scrollWheelZoom={false}
      zoomControl={false}
      className="h-full w-full"
    >
      {/* Bottom-right so it doesn't sit under the "Active Region" card. */}
      <ZoomControl position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {areas.map((area) => (
        <Marker
          key={area.name}
          position={[area.lat, area.lng]}
          icon={pinIcon(area.name)}
          title={area.name}
        />
      ))}
    </MapContainer>
  );
}
