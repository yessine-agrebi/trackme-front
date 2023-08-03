import React, { useState, useEffect } from "react";
import Textinput from "@/components/ui/Textinput";
import { Controller, useForm } from "react-hook-form";
import { getUser, updateUser } from "../../service/UserService";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const EditUser = ({ userId, refreshUsers, handleCloseModal  }) => {
  const navigate = useNavigate();
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
      password: "",
    },
  });

  const roleOptions = [
    { value: "admin", label: "admin" },
    { value: "revendeur", label: "revendeur" },
    { value: "client", label: "client" },
  ];

  useEffect(() => {
    // Fetch the user data using the userId
    const fetchUser = async () => {
      try {
        const user = await getUser(userId);
        // Set the form values with the fetched user data
        setValue("name", user.name);
        setValue("email", user.email);
        setValue("phone", user.phone);
        setValue("password", user.password);
        setValue("role", user.role);
      } catch (error) {
        console.error("Failed to fetch user:", error.message);
      }
    };

    fetchUser();
  }, [userId, setValue]);

  const onSubmit = async (data) => {
    // Add logic to update the user data in the database
    await updateUser(userId, data)
      .then((response) => {
        // Redirect to user list page or show success message
        refreshUsers()
        handleCloseModal()
        navigate("/listofusers");
      })
      .catch((error) => console.log("Failed to update user:", error.message));
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
                value={roleOptions.find((option) => option.value === field.value)}
                onChange={(selectedOption) => field.onChange(selectedOption.value)}
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

export default EditUser;
