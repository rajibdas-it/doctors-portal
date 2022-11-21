import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthContext/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  // console.log(user.email);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  return (
    <div>
      <h1 className="text-3xl mb-5">My Appointments</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Fee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking?.paitentName}</td>
                <td>{booking?.treatmentName}</td>
                <td>{booking?.appointmentDate}</td>
                <td>{booking?.appointmentShedhule}</td>
                <td>{booking?.price}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-sm btn-primary">Pay</button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-primary">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
