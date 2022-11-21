import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import moment from "moment";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { user } = useContext(AuthContext);
  const createdDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  // console.log(user.email);
  // const userEmail = {
  //   email: user.email,
  // };
  // console.log(treatment);
  const { name, slots, price } = treatment;
  const date = format(selectedDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const paitentName = form.name.value;
    const paitentEmail = form.email.value;
    const paitentPhone = form.phone.value;

    // console.log(date, slot, name, email, phone);

    const booking = {
      postedDate: createdDate,
      appointmentDate: date,
      treatmentName: treatment?.name,
      appointmentShedhule: slot,
      paitentName,
      paitentEmail,
      paitentPhone,
      price,
    };
    // console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Your booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  //modal ta auto close korar jonno.
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="grid grid-cols-1 gap-3" onSubmit={handleBooking}>
            <input
              //   type="text"
              value={date}
              className="input input-bordered w-full"
              readOnly
            />
            <div>
              <select name="slot" className="select select-bordered w-full">
                {slots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Type your name here"
              readOnly
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              readOnly
              placeholder="Type your email here"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Type your phone no here"
              className="input input-bordered w-full"
            />

            <input
              className="w-full bg-accent text-white py-3 rounded-md"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
