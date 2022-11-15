import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { useForm } from "react-hook-form";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { userPasswordReset } = useContext(AuthContext);

  const handleSubmitEmail = (data) => {
    userPasswordReset(data.email)
      .then(() => {
        alert("Password reset link has been sent to your email");
        reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-[800px] flex flex-col justify-center items-center">
      <div className="w-96">
        <h1 className="text-2xl font-bold text-center">Reset Password Form</h1>
        <form onSubmit={handleSubmit(handleSubmitEmail)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Email <span className="text-red-500">*</span>
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

          <input
            type="submit"
            value="Submit Email"
            className="btn btn-accent w-full mt-7"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
