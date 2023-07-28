import React, { useEffect, useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUser, getUsers } from "../../service/UserService";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { getDevices } from "../../service/DeviceService";
import { createCar } from "../../service/CarService";
const defaultValues = {
  brand: "",
  model: "",
  num_serie: "",
  user: "",
  device_id: "",
};
const FormValidationSchema = yup.object({
  brand: yup.string().required("Brand is required"),
  model: yup.string().required("Model is required"),
  num_serie: yup.string().required("N° Serie is required"),
});

const AddCar = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [devices, setDevices] = useState([]);
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: yupResolver(FormValidationSchema),
  });

  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res))
      .catch((error) => console.error(error.message));
    getDevices()
      .then((res) => setDevices(res))
      .catch((error) => console.error(error.message));
  }, []);

  const usersOptions = users?.map((user) => ({
    value: user._id,
    label: user.name,
  }));
  const devicesOptions = devices?.map((device) => ({
    value: device.id,
    label: device.name,
  }));

  const onSubmit = async (data) => {
    await createCar(data)
      .then((response) => console.log(response))
      .catch((error) => console.log("Failed to add user:", error.message));
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
        <div className="mb-1">
          <label htmlFor="role" className="form-label">
            User
          </label>
          <Controller
            control={control}
            name="user"
            render={({ field }) => (
              <Select
                {...field}
                className="react-select"
                classNamePrefix="select"
                options={usersOptions}
                value={usersOptions.find(
                  (option) => option.value === field.value
                )}
                onChange={(selectedOption) =>
                  field.onChange(selectedOption.value)
                }
                id="user"
              />
            )}
          />
          {errors.user && <span>{errors.user.message}</span>}
        </div>
        <div className="mb-1">
          <label htmlFor="role" className="form-label">
            Device
          </label>
          <Controller
            control={control}
            name="device_id"
            render={({ field }) => (
              <Select
                {...field}
                className="react-select"
                classNamePrefix="select"
                options={devicesOptions}
                value={devicesOptions.find(
                  (option) => option.value === field.value
                )}
                onChange={(selectedOption) =>
                  field.onChange(selectedOption.value)
                }
                id="device_id"
              />
            )}
          />
          {errors.user && <span>{errors.user.message}</span>}
        </div>

        <div className="ltr:text-right rtl:text-left">
          <button className="btn btn-dark text-center" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
