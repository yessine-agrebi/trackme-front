import React, { useEffect, useState } from 'react'
import { Button, Card } from 'reactstrap'
import axios from 'axios';
import Icon from "@/components/ui/Icon";
import { deleteUser } from '../../service/UserService';
import { Navigate, useNavigate } from 'react-router-dom';

const ListOfUser = () => {

  const [users, setUsers] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchUsers();
  }, [refreshFlag]);
  const refreshUsers = () => {
    setRefreshFlag(!refreshFlag);
  };
  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    
    if (confirmDelete) {
      try {
        await deleteUser(userId);
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
        alert("User deleted successfully!");
      } catch (error) {
        console.log(error);
        alert("An error occurred while deleting the user.");
      }
    }
  };
   const navigate =useNavigate()
  return (
    <div className='container'>
      <Card>
      <Button text="success" className="btn-outline-success m-1" onClick={() => navigate('/addusers')} >Ajouter un client</Button>
      </Card>
      <Card title="Table Head" >
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                <thead className="bg-slate-200 dark:bg-slate-700">
                <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700 text-center">
                {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                <Button  className='text-nowrap px-1'  onClick={() => handleDeleteUser(user._id)}   outline>
                    
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

export default ListOfUser
