import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";

const Register = () => {
  const { createUser, googleSignIn, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignup = (data) => {
    const username = data.username;
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const userInfo = { displayName: username };
        updateUserProfile(userInfo)
          .then(() => {
            saveUser(email, username);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("user created successfully");
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/home");
      });
  };
  return (
    <div className="h-[800px] flex flex-col justify-center items-center">
      <div className="w-96">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Username <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("username", {
                required: "Username field is required",
              })}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username?.message}</p>
            )}
          </div>
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
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text">
                Password <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password field is required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 or more characters",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Please use at least one uppercase letter, one special character and one number.",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <input
            type="submit"
            value="Signup"
            className="btn btn-accent w-full"
          />
        </form>
        <p className="mt-3">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-secondary underline">login</span>
          </Link>
        </p>
        <div className="divider">OR</div>
        <input
          onClick={handleGoogleSignIn}
          type="submit"
          value="continue with google"
          className="btn btn-outline w-full"
        />
      </div>
    </div>
  );
};

export default Register;
