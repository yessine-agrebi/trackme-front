import React, { useEffect, useState } from "react";
import { Button, Card } from "reactstrap";
import Icon from "@/components/ui/Icon";
import { deleteCar, getCars } from "../../service/CarService";
import { Navigate, useNavigate } from "react-router-dom";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCars()
      .then((data) => {
        setCars(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshFlag]);

  const refreshcars = () => {
    setRefreshFlag(!refreshFlag);
  };
  const handleDeleteCar = async (carId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this car?"
    );

    if (confirmDelete) {
      try {
        await deleteCar(carId);
        setCars((prevCars) => prevCars.filter((car) => car._id !== carId));
        refreshcars();
        alert("Car deleted successfully!");
      } catch (error) {
        console.log(error);
        alert("An error occurred while deleting the car.");
      }
    }
  };
  return (
    <div className="container">
      <Card>
        <Button
          text="success"
          className="btn-outline-success m-1"
          onClick={() => navigate("/addcar")}
        >
          Ajouter une voiture
        </Button>
      </Card>
      <Card title="Table Head">
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                <thead className="bg-slate-200 dark:bg-slate-700">
                  <tr>
                    <th>Brand</th>
                    <th>Modele</th>
                    <th>N° Serie</th>
                    <th>User</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700 text-center">
                  {cars &&
                    cars.map((car) => (
                      <tr key={car._id}>
                        <td>{car.brand}</td>
                        <td>{car.model}</td>
                        <td>{car.num_serie}</td>
                        <td>{car.user.name}</td>
                        <td>
                          <Button
                            className="text-nowrap px-1"
                            onClick={() => handleDeleteCar(car._id)}
                            outline
                          >
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
  );
};

export default CarsList;
