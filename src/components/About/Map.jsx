import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "/logo.png",
  iconSize: [60, 25],
});

const Map = () => {
  const position = [-6.200000, 106.816666];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-left text-white mb-16 tracking-tight">Our Location</h2>
        <div className="w-full h-96">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-full rounded-lg shadow-lg">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                <strong>TravelMate Headquarters</strong> <br /> Jalan Kebon Kacang, Jakarta
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Map;
