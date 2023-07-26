import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import Api from "../../axios/Api";
import FlatpickerPage from "./FlatpickerPage";
import { Button, Card } from "reactstrap";
import { getPosition, getStatus } from "../../service/DeviceService";
import Statustable from "../../utils/Statustable";
import socketIO from 'socket.io-client';

const MarkerMap = () => {
  const [initialPosition, setInitialPosition] = useState([
    34.754684, 10.755748,
  ]);
  const [positions, setPositions] = useState([]);
  const [status, setStatus] = useState([]);
  const [historyPositions, setHistoryPositions] = useState([]);
  const markerRef = useRef(null);
  const [polylineCoord, setPolylineCoord] = useState([]);
  const [isVisible, setisVisible] = useState(false);
  const handlButtonClick = () => {
    setTimeout(() => {
      setisVisible(!isVisible);
    }, 500);
  };

  useEffect(() => {
    const socket = socketIO('http://localhost:3001');
    // Listen for 'positionUpdate' event from the server
    socket.on('positionUpdate', (data) => {
      setPositions([data.latitude, data.longitude]);
    });
    getPosition()
      .then((response) => setPositions([response.latitude, response.longitude]))
      .catch((error) => console.error(error.message));
    getStatus()
      .then((response) => setStatus(response))
      .catch((error) => console.error(error.message));
    // Fetch initial positions
    // const interval = setInterval(getPosition, 3000);
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);
  useEffect(() => {
    if (coordinates.length > 0 && markerRef.current) {
      const lastPosition = coordinates[coordinates.length - 1];
      markerRef.current.setLatLng(lastPosition);
    }
  }, []);

  useEffect(() => {
    if (historyPositions.length > 0) {
      const updatedPolylineCoord = historyPositions.map(
        ({ latitude, longitude }) => [latitude, longitude]
      );
      setPolylineCoord(updatedPolylineCoord);

      const lastPosition =
        updatedPolylineCoord[updatedPolylineCoord.length - 1];
      markerRef.current.setLatLng(lastPosition);
    }
  }, [historyPositions]);

  const coordinates = positions?.map(({ latitude, longitude }) => [
    latitude,
    longitude,
  ]);

  const handleDateRangeChange = async (startDate, endDate) => {
    console.log("first:", startDate, "last:", endDate);
    try {
      let filteredPositions = [];
      if (endDate) {
        const response = await Api.get(
          `/history/5195374/${startDate}/${endDate}`
        );
        filteredPositions = response.data;
      } else {
        const response = await Api.get(`/history/5195374/${startDate}`);
        filteredPositions = response.data;
      }

      setHistoryPositions(filteredPositions);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
      <div className="w-full h-[400px]">
        <Button
          text="success"
          className=" btn-outline-success rounded-[999px] m-1"
          onClick={handlButtonClick}
        >
          Historique
        </Button>
        {isVisible && (
          <FlatpickerPage onDateRangeChange={handleDateRangeChange} />
        )}
        <MapContainer
          center={initialPosition}
          zoom={10}
          maxZoom={18}
          minZoom={3}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            ref={markerRef}
            position={initialPosition}
            interactive={false}
          />
          {polylineCoord.length > 0 && (
            <Polyline
              positions={polylineCoord}
              color="red"
              smoothFactor={0.5}
            />
          )}
        </MapContainer>
        <Statustable status={status} />
      </div>
  );
};

export default MarkerMap;
