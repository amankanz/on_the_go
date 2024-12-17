import React, { useRef, useState } from "react";
import { Car } from "@/libs/types";
import CarCard from "./CarCard";
import CarsListSkeleton from "../Skeletons/CarsListSkelton";
import BookingModal from "../CarBooking/BookingModal";

interface CarsListProps {
  carsList: Car[];
}

function CarsList({ carsList }: CarsListProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const openModal = (car: Car) => {
    setSelectedCar(car); // Set the selected car
    modalRef.current?.showModal(); // Open the modal using dialog reference
  };

  const closeModal = () => {
    setSelectedCar(null); // Reset the selected car
    modalRef.current?.close(); // Close the modal using dialog reference
  };

  return (
    <section className="flex flex-col">
      {carsList.length === 0 ? (
        <CarsListSkeleton count={4} />
      ) : (
        <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {carsList.map((car) => (
            <div
              className="mx-auto"
              key={car.id}
              onClick={() => openModal(car)} // Open the modal with the selected car
            >
              <CarCard key={car.id} car={car} />
            </div>
          ))}
          {/* Modal Dialog */}
          <dialog ref={modalRef} id="my_modal_4" className="modal">
            {selectedCar && (
              <BookingModal
                selectedCar={selectedCar}
                closeModal={closeModal} // Pass the closeModal function
              />
            )}
          </dialog>
        </section>
      )}
    </section>
  );
}

export default CarsList;
