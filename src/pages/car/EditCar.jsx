import React, { useEffect, useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../common/Modal";
import { getOnecar, updateCar } from "../../service/CarService";

const FormValidationSchema = yup.object({
  brand: yup.string().required("Brand is required"),
  model: yup.string().required("Model is required"),
  num_serie: yup.string().required("N° Serie is required"),
});

const EditCar = ({ carId, refreshCars, handleCloseModal }) => {
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
  });

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const carData = await getOnecar(carId);
        setCar(carData);
        setValue("brand", carData.brand);
        setValue("model", carData.model);
        setValue("num_serie", carData.num_serie);
      } catch (error) {
        console.error("Failed to fetch car:", error.message);
      }
    };

    fetchCar();
  }, [carId, setValue]);

  const onSubmit = async (data) => {
    await updateCar(carId, data)  // Modifier la requête PATCH en PUT
      .then((response) => {
        refreshCars();
        handleCloseModal();
      })
      .catch((error) => console.log("Failed to update car:", error.message));
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Textinput
          name="brand"
          label="Brand"
          type="text"
          register={register}
          error={errors.brand}
          msgTooltip
        />
        <Textinput
          name="model"
          label="Model"
          type="text"
          register={register}
          error={errors.model}
          msgTooltip
        />
        <Textinput
          name="num_serie"
          label="N° Serie"
          type="text"
          register={register}
          error={errors.num_serie}
          msgTooltip
        />
        {/* Additional form inputs or fields */}
        <div className="ltr:text-right rtl:text-left">
          <button className="btn btn-dark text-center" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCar;
