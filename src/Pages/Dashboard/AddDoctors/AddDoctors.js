import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctors = () => {
  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: () =>
      fetch("http://localhost:5000/appointmentSpecialty").then((res) =>
        res.json()
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imbb_key;
  //   console.log(imageHostKey);
  const navigate = useNavigate();

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctorProfile = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          fetch("http://localhost:5000/addadoctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctorProfile),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("New Doctor Added Successfully");
                navigate("/dashboard/managedoctor");
              }
            });
        }
      });
  };
  return (
    <div className="w-96">
      <h1>Add Doctor Page</h1>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Doctor Name <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("name", {
              required: "Doctor name field is required",
            })}
          />
          {errors.name && (
            <p className="text-red-500">{errors.name?.message}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Doctor Email <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            {...register("email", { required: "Email field is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Specialty <span className="text-red-500">*</span>
            </span>
          </label>
          <select
            className="select select-bordered w-full"
            {...register("specialty", { required: true })}
          >
            <option disabled selected>
              Pick a Specialty
            </option>
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Upload Image <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full"
            {...register("image", {
              required: "Doctor name field is required",
            })}
          />
          {errors.name && (
            <p className="text-red-500">{errors.name?.message}</p>
          )}
        </div>

        <input
          type="submit"
          value="Add Doctor"
          className="btn btn-accent w-full mt-5"
        />
      </form>
    </div>
  );
};

export default AddDoctors;
