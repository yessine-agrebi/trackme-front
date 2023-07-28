import React, { useEffect, useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUser, getUsers } from "../../service/UserService";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { getDevices } from "../../service/DeviceService";
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
  user: yup.string().required("User is required"),
  device_id: yup.number().required("Device ID is required"),
});

const AddCar = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  const [devices, setDevices] = useState([])
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
    getUsers().then((res) => setUsers(res)).catch((error) => console.error(error.message));
    getDevices().then((res) => setDevices(res)).catch((error) => console.error(error.message));
  }, [])

  const usersOptions = users?.map((user) => ({
    value: user._id,
    label: user.name,
  }));
  const devicesOptions = devices?.map((device) => ({
    value: device.id,
    label: device.name,
  }));

  const onSubmit = async (data) => {
    await createUser(data)
      .then((response) => console.log(response))
      .catch((error) => console.log("Failed to add user:", error.message));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Textinput
          name="name"
          label="Nom"
          type="text"
          register={register}
          error={errors.name}
          msgTooltip
        />
        <Textinput
          name="email"
          label="Email"
          type="email"
          register={register}
          error={errors.email}
          msgTooltip
        />
        <Textinput
          name="phone"
          label="Telephone"
          type="phone"
          register={register}
          error={errors.phone}
          msgTooltip
        />
        <Textinput
          name="password"
          label="Password"
          type="password"
          register={register}
          error={errors.password}
          msgTooltip
        />
        <div className="mb-1">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <Controller
            control={control}
            name="role"
            render={({ field }) => (
              <Select
                {...field}
                className="react-select"
                classNamePrefix="select"
                options={roleOptions}
                value={roleOptions.find(
                  (option) => option.value === field.value
                )}
                onChange={(selectedOption) =>
                  field.onChange(selectedOption.value)
                }
                id="role"
              />
            )}
          />
          {errors.role && <span>{errors.role.message}</span>}
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
