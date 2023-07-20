import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUser } from "../../service/UserService";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
const defaultValues = {
  name: '',
  email: '',
  phone: '',
  role: '',
  password:'',
}
const FormValidationSchema = yup.object({
  password: yup.string().required("Password is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  role: yup.string().required("Role is required"),
  phone: yup.string().required("Phone is required"),
  name: yup.string().required("Name is required"),
});

const AddUsers = () => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: yupResolver(FormValidationSchema),
  });

  const role = [
    { name: "basic", label: "admin" },
    { name: "subscriber", label: "client" },
  ];

  const onSubmit = async (data) => {
   
    try {
      const newUser = await createUser({
        name: data.name,
        email: data.email,
        password: data.password,
        isAdmin: data.isAdmin,
        phone: data.phone
      });
      
      console.log('New user added:', newUser);
     
      //window.location.reload();
    
    } catch (error) {
      console.log('Failed to add user:', error.message);
    }
  };

  const navigate = useNavigate();

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
          type="number"
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
                options={role}
                onChange={(selectedOption) => field.onChange(selectedOption.name)}
                id="role"
              />
            )}
          />
          {errors.role && <span>{errors.role.message}</span>}
        </div>

        <div className="ltr:text-right rtl:text-left">
          <button
            className="btn btn-dark text-center"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
