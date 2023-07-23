import React, { useEffect, useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getUsers } from "../../service/UserService";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { createDevice } from "../../service/DeviceService";
const defaultValues = {
  name: "",
  device_type_id: "",
  ident: "",
  phone: "",
  settings_polling: "once",
  messages_ttl: 1,
  messages_rotate: 0,
  user: "",
};
const FormValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
  device_type_id: yup.number().required("Device type id is required"),
  ident: yup.string().required("Ident is required"),
  phone: yup.string().required("settings_polling is required"),
  settings_polling: yup.string(),
  messages_ttl: yup.number(),
  messages_rotate: yup.number(),
  user: yup.string().required("User is required"),
});

const AddDevice = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
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
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const usersOptions = users?.map((user) => ({
    value: user._id,
    label: user.name,
  }));

  const onSubmit = async (data) => {
    const deviceData = [
      {
        name: data.name,
        device_type_id: data.device_type_id,
        configuration: {
          ident: data.ident,
          phone: data.phone,
          settings_polling: data.settings_polling,
        },
        messages_ttl: data.messages_ttl,
        messages_rotate: data.messages_rotate,
        user: data.user,
      },
    ];
    createDevice(deviceData)
      .then((res) => console.log(res))
      .catch((error) => console.error(error.message));
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
          name="device_type_id"
          label="Device Type ID"
          type="number"
          register={register}
          error={errors.device_type_id}
          msgTooltip
        />
        <Textinput
          name="ident"
          label="IMEI"
          type="text"
          register={register}
          error={errors.ident}
          msgTooltip
        />
        <Textinput
          name="phone"
          label="Telephone"
          type="text"
          register={register}
          error={errors.phone}
          msgTooltip
        />
        <div className="mb-1">
          <label htmlFor="user" className="form-label">
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

        <div className="ltr:text-right rtl:text-left">
          <button className="btn btn-dark text-center" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDevice;
