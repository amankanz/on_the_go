/*
import React from "react";
import { Car } from "@/libs/types";
import CarCard from "./CarCard";
import CarsListSkeleton from "../Skeltons/CarsListSkelton";

interface CarsListProps {
  carsList: Car[];
}

function CarsList({ carsList }: CarsListProps) {
  return (
    <section className="flex flex-col">
      {carsList.length === 0 ? (
        // <p className="text-center text-gray-500">No cars available.</p>
        <CarsListSkeleton count={4} />
      ) : (
        <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {carsList.map((car, index) => (
            <div key={index}>
              <CarCard car={car} />
            </div>
          ))}
        </section>
      )}
      {/* <button className="bg-blue-500 text-white w-fit py-2 px-4 rounded-md mx-auto">
        Load More
      </button> =/}
    </section>
  );
}

export default CarsList;
*/

/*
import React from "react";
import { Car } from "@/libs/types";
import CarCard from "./CarCard";
import CarsListSkeleton from "../Skeltons/CarsListSkelton";

interface CarsListProps {
  carsList: Car[];
}

function CarsList({ carsList }: CarsListProps) {
  return (
    <section className="flex flex-col">
      {carsList.length === 0 ? (
        <CarsListSkeleton count={4} />
      ) : (
        <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {carsList.map((car) => (
            <div
              key={car.id}
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              <CarCard key={car.id} car={car} />
            </div>
          ))}

          {/* You can open the modal using document.getElementById('ID').showModal() method =/}
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Click the button below to close</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal =/}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </section>
      )}
    </section>
  );
}

export default CarsList;
*/

/*
import React, { useRef, useState } from "react";
import { Car } from "@/libs/types";
import CarCard from "./CarCard";
import CarsListSkeleton from "../Skeletons/CarsListSkelton";
import BookingModal from "../CarBooking/BookingModal";

interface CarsListProps {
  carsList: Car[];
}

interface CarProps {
  car: Car;
}

function CarsList({ carsList }: CarsListProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [selectedCar, setSelectedCar] = useState([]);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <section className="flex flex-col">
      {carsList.length === 0 ? (
        <CarsListSkeleton count={4} />
      ) : (
        <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {carsList.map((car) => (
            <div
              key={car.id}
              onClick={() => {
                openModal();
                setSelectedCar(car);
              }}
            >
              <CarCard key={car.id} car={car} />
            </div>
          ))}

          <dialog ref={modalRef} id="my_modal_4" className="modal">
            <BookingModal selectedCar={selectedCar} />
          </dialog>
        </section>
      )}
    </section>
  );
}

export default CarsList;
*/
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
