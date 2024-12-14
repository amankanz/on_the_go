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
            <CarCard key={car.id} car={car} />
          ))}
        </section>
      )}
    </section>
  );
}

export default CarsList;
