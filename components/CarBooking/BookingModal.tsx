import React from "react";
import CarCard from "../Home/CarCard";
import Form from "./Form";

function BookingModal({ selectedCar }) {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      <div className="border-b-[1px] pb-2 mb-12">
        <h3 className="text-3xl font-light text-gray-400">Rent A Car now!</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <CarCard car={selectedCar} />
        </div>
        <div>
          <Form />
        </div>
      </div>
      <div className="modal-action gap-5">
        <button className="btn bg-blue-500 text-white hover:bg-blue-700">
          Save
        </button>
        <button className="btn">Close</button>
      </div>
    </form>
  );
}

export default BookingModal;
