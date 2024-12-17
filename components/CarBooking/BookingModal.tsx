import React, { useRef } from "react";
import CarCard from "../Home/CarCard";
import Form from "./Form";
import { Car } from "@/libs/types";

// Define the type for the methods exposed by the Form component
interface FormMethods {
  handleSubmit: () => void;
}

interface BookingModalProps {
  selectedCar: Car;
  closeModal: () => void; // Prop to close the modal
}

function BookingModal({ selectedCar, closeModal }: BookingModalProps) {
  // Type the formRef to match the methods exposed by Form
  const formRef = useRef<FormMethods | null>(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.handleSubmit(); // Call the form's submit handler
    }
    closeModal(); // Close the modal after saving
  };

  return (
    <div className="modal modal-open">
      <form method="dialog" className="modal-box w-11/12 max-w-5xl">
        <div className="border-b-[1px] pb-2 mb-12">
          <h3 className="text-3xl font-light text-gray-400">Rent A Car now!</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <CarCard car={selectedCar} />
          </div>
          <div>
            <Form ref={formRef} car={selectedCar} />
          </div>
        </div>
        <div className="modal-action gap-5">
          <button
            type="button"
            className="btn bg-blue-500 text-white hover:bg-blue-700"
            onClick={handleSave}
          >
            Save
          </button>
          <button type="button" className="btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingModal;
