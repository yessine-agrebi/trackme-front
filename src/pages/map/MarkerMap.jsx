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
  // const deviceIdList = userData?.cars?.map((car) => car.device_id) || [];
  // const CarsAndDeviceStatus = async() => {
  //   try {
  //     const statusPromises = deviceIdList.map((deviceId) =>
  //       getStatus(deviceId)
  //         .then((response) => response)
  //         .catch((error) => console.error(error.message))
  //     );
  //     const allStatus = await Promise.all(statusPromises);

  //     // Combine car data and status data
  //     const combinedData = userData?.cars?.map((car, index) => ({
  //       carModel: car.model,
  //       carNumSerie: car.num_serie,
  //       batteryLevel: allStatus[index]?.telemetry?.["battery.level"]?.value,
  //       defenseActiveStatus: allStatus[index]?.telemetry?.["defense.active.status"]?.value,
  //       gsmSignalLevel: allStatus[index]?.telemetry?.["gsm.signal.level"]?.value,
  //       // Add other properties from the status object as needed
  //     }));

  //     console.log(combinedData);
  //     setStatus(combinedData);
  //   } catch (error) {
  //     console.error("Failed to fetch car status:", error.message);
  //   }
  // }

  useEffect(() => {
    const socket = socketIO(import.meta.env.VITE_URL);

    // Listen for 'positionUpdate' event from the server
    const handlePositionUpdate = (data) => {
      // Find the index of the position in the positions array based on the device ID
      const deviceIndex = positions.findIndex(
        (pos) => pos.deviceId === data.id
      );

      // Update the position or add a new position if not found
      if (deviceIndex !== -1) {
        const updatedPositions = [...positions];
        updatedPositions[deviceIndex] = {
          deviceId: data.id,
          latitude: data.latitude,
          longitude: data.longitude,
        };
        setPositions(updatedPositions);
      } else {
        setPositions((prevPositions) => [
          ...prevPositions,
          {
            deviceId: data.id,
            latitude: data.latitude,
            longitude: data.longitude,
          },
        ]);
      }
    };

    socket.emit("getInitialPosition", deviceId);
    socket.on("positionUpdate", handlePositionUpdate);

    // CarsAndDeviceStatus()
    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("positionUpdate", handlePositionUpdate);
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Update marker positions for all devices
    positions.forEach((pos) => {
      if (
        pos.latitude !== null &&
        pos.longitude !== null &&
        markerRef.current[pos.deviceId]
      ) {
        markerRef.current[pos.deviceId].setLatLng([
          pos.latitude,
          pos.longitude,
        ]);
      }
    });
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
          `/history/${deviceId}/${startDate}/${endDate}`
        );
        filteredPositions = response.data;
      } else {
        const response = await Api.get(`/history/${deviceId}/${startDate}`);
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
          coordinates.length > 0
            ? coordinates[coordinates.length - 1]
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
        {/* Loop through positions and create markers for each device */}
        {positions.map(
          (pos, index) =>
            pos.latitude !== null &&
            pos.longitude !== null && (
              <Marker
                key={index}
                ref={markerRef}
                position={[pos.latitude, pos.longitude]}
                interactive={false}
              />
            )
        )}
        {polylineCoord.length > 0 && (
          <Polyline positions={polylineCoord} color="red" smoothFactor={0.5} />
        )}
      </MapContainer>
      {/* <Statustable status={status} /> */}
    </div>
  );
};

export default MarkerMap;
