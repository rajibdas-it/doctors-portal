import React from "react";
import person1 from "../../../assets/images/people1.png";

const ContactUs = () => {
  return (
    <div className="mt-20">
      <div className="mb-36">
        <h3 className="text-secondary text-xl font-bold mb-3">Testimonial</h3>
        <h1 className="text-4xl">What Our Patients Says</h1>
      </div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="mb-9">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-start">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  <img src={person1} />
                </div>
                <div className="">
                  <h1>Winson Herry</h1>
                  <p>California</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
