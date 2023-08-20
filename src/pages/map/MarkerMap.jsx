import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import Leaflet from 'leaflet';
import socketIO from "socket.io-client";

const MarkerMap = () => {
  const [initialPosition, setInitialPosition] = useState([34.754684, 10.755748]);
  const [positions, setPositions] = useState([]);
  const [polylineCoord, setPolylineCoord] = useState([]);
  const [isVisible, setisVisible] = useState(false);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const deviceId = userData.devices;

  // Create a state to hold marker references for each device
  const [markerRefs, setMarkerRefs] = useState({});

  useEffect(() => {
    const socket = socketIO(import.meta.env.VITE_URL);

    const handlePositionUpdate = (data) => {
      // Create or update the marker reference for the device
      if (data.latitude !== null && data.longitude !== null) {
        if (!markerRefs[data.id]) {
          const newMarker = Leaflet.marker([data.latitude, data.longitude], {
            // Add marker options if needed
          });
          setMarkerRefs((prevRefs) => ({
            ...prevRefs,
            [data.id]: newMarker,
          }));
        } else {
          markerRefs[data.id].setLatLng([data.latitude, data.longitude]);
        }
      }
    };

    socket.emit("getInitialPosition", deviceId);
    socket.on("positionUpdate", handlePositionUpdate);

    return () => {
      socket.off("positionUpdate", handlePositionUpdate);
      socket.disconnect();
    };
  }, [markerRefs, deviceId]);

  useEffect(() => {
    // Update polyline coordinates
    const updatedPolylineCoord = positions.map(({ latitude, longitude }) => [latitude, longitude]);
    setPolylineCoord(updatedPolylineCoord);
  }, [positions]);

  return (
    <div className="w-full h-[400px]">
      {/* ... */}
      <MapContainer
        center={
          positions.length > 0
            ? [positions[positions.length - 1].latitude, positions[positions.length - 1].longitude]
            : initialPosition
        }
        zoom={7}
        maxZoom={18}
        minZoom={3}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Object.keys(markerRefs).map((deviceId) => (
          <Marker
            key={deviceId}
            position={markerRefs[deviceId].getLatLng()}
            ref={markerRefs[deviceId]}
            interactive={false}
          />
        ))}
        {polylineCoord.length > 0 && (
          <Polyline positions={polylineCoord} color="red" smoothFactor={0.5} />
        )}
      </MapContainer>
    </div>
  );
};

export default MarkerMap;
