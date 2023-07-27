import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import Api from "../../axios/Api";
import FlatpickerPage from "./FlatpickerPage";
import { Button, Card } from "reactstrap";
import { getPosition, getStatus } from "../../service/DeviceService";
import Statustable from "../../utils/Statustable";
import socketIO from "socket.io-client";

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

  const userData = JSON.parse(localStorage.getItem("userData"));
  const deviceId = userData.devices;
  // useEffect(() => {
  //   // Listen for 'positionUpdate' event from the server
  //   socket.on("positionUpdate", (data) => {
  //     console.log('data', data);
  //     setPositions([data.latitude, data.longitude]);
  //   });
  //   socket.emit("getInitialPosition", deviceId);
  //   getStatus()
  //     .then((response) => setStatus(response))
  //     .catch((error) => console.error(error.message));
  // }, [socket]);

  const socketRef = useRef(null);

  useEffect(() => {
    const socket = socketIO("http://localhost:3001");

    // Listen for 'positionUpdate' event from the server
    const handlePositionUpdate = (data) => {
      console.log(data);
      setPositions([data.latitude, data.longitude]);
    };

    socket.on("positionUpdate", handlePositionUpdate);
    socket.emit("getInitialPosition", deviceId);

    getStatus()
      .then((response) => setStatus(response))
      .catch((error) => console.error(error.message));

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("positionUpdate", handlePositionUpdate);
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (positions.length > 0 && markerRef.current) {
      markerRef.current.setLatLng(positions);
    }
  }, [positions]);

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
        center={
          positions.length > 0
            ? positions[positions.length - 1]
            : initialPosition
        }
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
        {positions.length > 0 && (
          <Marker
            ref={markerRef}
            position={positions}
            interactive={false}
          />
        )}
        {polylineCoord.length > 0 && (
          <Polyline positions={polylineCoord} color="red" smoothFactor={0.5} />
        )}
      </MapContainer>
      <Statustable status={status} />
    </div>
  );
};

export default MarkerMap;
