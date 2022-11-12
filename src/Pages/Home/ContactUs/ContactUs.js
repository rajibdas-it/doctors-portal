import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Components/PrimaryButton";

const ContactUs = () => {
  return (
    <div
      className="hero mt-36"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-center">
          <h3 className="text-xl font-bold mb-2 text-secondary">Contact Us</h3>
          <h1 className="text-5xl text-white mb-10">Stay connected with us</h1>
        </div>
        <div className="card flex-shrink-0 w-full ">
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control my-5">
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
