import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-[800px] flex flex-col justify-center items-center">
      <div className="w-96">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
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
              })}
            />
            <label className="label">
              <span className="label-text">
                <Link to="/resetpassword">Forgot password?</Link>
              </span>
            </label>

            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-accent w-full"
          />
        </form>
        <p className="mt-3">
          New to doctor portal website?{" "}
          <Link to="/signup">
            <span className="text-secondary underline">signup</span>
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

export default Login;
