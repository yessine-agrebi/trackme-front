import React, { useEffect, useState } from 'react'
import { Button, Card } from 'reactstrap'
import Icon from "@/components/ui/Icon";
import { deleteUser, getUsers } from '../../service/UserService';
import { useNavigate } from 'react-router-dom';
import { getDevices } from '../../service/DeviceService';

const DevicesList = () => {
  const [devices, setDevices] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const navigate =useNavigate()

  useEffect(() => {
    getDevices()
    .then(data => {
      setDevices(data);
    })
    .catch(error => {
      console.error(error);
    });
  }, [refreshFlag]);

  const refreshDevices = () => {
    setRefreshFlag(!refreshFlag);
  };
  const handleDeleteDevice = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this device?");
    
    if (confirmDelete) {
      try {
        await deleteDevice(userId);
        setDevices((prevUsers) => prevUsers.filter((user) => user._id !== userId));
        refreshDevices();
        alert("Device deleted successfully!");
      } catch (error) {
        console.log(error);
        alert("An error occurred while deleting the device.");
      }
    }
  };
  return (
    <div className='container'>
      <Card>
      <Button text="success" className="btn-outline-success m-1" onClick={() => navigate('/addusers')} >Ajouter une appareil</Button>
      </Card>
      <Card title="Table Head" >
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                <thead className="bg-slate-200 dark:bg-slate-700">
                <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>IMEI</th>
              <th>N° SIM</th>
              <th>Action</th>
            </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700 text-center">
                {devices && devices.map((device) => (
              <tr key={device.id}>
                <td>{device.id}</td>
                <td>{device.name}</td>
                <td>{device.configuration.ident}</td>
                <td>{device.configuration.phone}</td>
                <td>
                <Button  className='text-nowrap px-1'  onClick={() => handleDeleteDevice(device.id)}   outline>
                    
                <Icon icon="heroicons:archive-box-x-mark" />
                  </Button>
                 
                </td>
              </tr>
            ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default DevicesList
