import React, { useEffect, useState } from "react";
import { Button, Card } from "reactstrap";
import Icon from "@/components/ui/Icon";
import { deleteUser, getUsers } from "../../service/UserService";
import { useNavigate } from "react-router-dom";
import Modal from "../common/Modal";
import EditUser from "./EditUser";

const ListOfUser = () => {
  const [users, setUsers] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [_id, setId] = useState("");

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshFlag]);

  const refreshUsers = () => {
    setRefreshFlag(!refreshFlag);
  };
  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      try {
        await deleteUser(userId);
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
        refreshUsers();
        alert("User deleted successfully!");
      } catch (error) {
        console.log(error);
        alert("An error occurred while deleting the user.");
      }
    }
  };
  const handleEditUser = (userId) => {
    setShowModal(!showModal);
    setId(userId);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      {showModal && (
        <Modal 
        activeModal={showModal} 
        onClose={handleCloseModal}
        title="Modifier Utilisateur"
        scrollContent={true}
        >
          <EditUser userId={_id} refreshUsers={refreshUsers} handleCloseModal={handleCloseModal} />
        </Modal>
      )}
      <Card>
        <Button
          text="success"
          className="btn-outline-success m-1"
          onClick={() => navigate("/addusers")}
        >
          Ajouter un client
        </Button>
      </Card>
      <Card title="Table Head">
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
                  {users &&
                    users.map((user) => (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                          <Button
                            className="text-nowrap px-1"
                            onClick={() => handleDeleteUser(user._id)}
                            outline
                          >
                            <Icon icon="heroicons:archive-box-x-mark" />
                          </Button>
                          <Button
                            className="text-nowrap px-1"
                            onClick={() => handleEditUser(user._id)}
                            outline
                          >
                            <Icon icon="heroicons:pencil-square" />
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
  );
};

export default ListOfUser;
