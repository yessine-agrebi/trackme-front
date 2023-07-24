import React from 'react'

const Statustable = ({status}) => {

  return (
      <div className="mt-4 pb-4">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
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
                  status.map((device) => (
                    <tr key={device.id}>
                      <td>{device.id}</td>
                      <td>{device.telemetry["device.name"].value}</td>
                      <td>{device.telemetry["battery.level"].value}%</td>
                      <td>{device.telemetry["gsm.signal.level"].value}</td>
                      <td>{device.telemetry["gnss.realtime.status"].value ? "Active": "Non Active"}</td>
                      <td>{device.telemetry["defense.active.status"].value ? "Active": "Non Active"}</td>
                      <td></td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default Statustable