import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    // console.log(date, slot, name, email, phone);

    const appointment = {
      appointmentDate: date,
      appointmentShedhule: slot,
      name,
      email,
      phone,
    };
    console.log(appointment);
    setTreatment(null); //modal ta auto close korar jonno.
  };
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
                {slots.map((slot) => (
                  <option value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <input
              name="name"
              type="text"
              placeholder="Type your name here"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
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
