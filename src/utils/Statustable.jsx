import React, { useState, useEffect } from "react";

const Statustable = ({ status }) => {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [signalLevel, setSignalLevel] = useState(0);

  useEffect(() => {
    if (status && status.length > 0) {
      const device = status[0]; // You might want to change this based on how your data is structured
      const batteryLevel = device.telemetry["battery.level"].value;
      const signalLevel = device.telemetry["gsm.signal.level"].value;

      setBatteryLevel(batteryLevel);
      setSignalLevel(signalLevel);
    }
  }, [status]);

  return (
    <div className="mt-4 pb-4">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
            <thead className="bg-slate-200 dark:bg-slate-700">
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Batterie</th>
                <th>Signal</th>
                <th>GNSS</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700 text-center">
              {status &&
                status.map((device) => {
                  // Get the battery and signal levels from device telemetry data
                  const batteryLevel = device.telemetry["battery.level"].value;
                  const signalLevel =
                    device.telemetry["gsm.signal.level"].value;

                  return (
                    <tr key={device.id}>
                      <td>{device.id}</td>
                      <td>{device.telemetry["device.name"].value}</td>
                      <td className="flex items-center">
                          <div className="h-4 w-10 bg-gray-300">
                            <div
                              className={`h-full ${
                                batteryLevel <= 20
                                  ? "bg-red-500"
                                  : "bg-green-500"
                              }`}
                              style={{ width: `${batteryLevel}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-semibold ml-2">
                            {batteryLevel}%
                          </span>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <div className="h-4 w-10 bg-gray-300">
                            <div
                              className={`h-full ${
                                signalLevel <= 20
                                  ? "bg-red-500"
                                  : "bg-green-500"
                              }`}
                              style={{ width: `${signalLevel}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-semibold ml-2">
                            {signalLevel}%
                          </span>
                        </div>
                      </td>
                      <td>
                        {device.telemetry["gnss.realtime.status"].value
                          ? "Active"
                          : "Non Active"}
                      </td>
                      <td>
                        {device.telemetry["defense.active.status"].value
                          ? "Active"
                          : "Non Active"}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Statustable;
