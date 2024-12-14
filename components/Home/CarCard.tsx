import { Car } from "@/libs/types";
import Image from "next/image";
import React, { useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

interface CarProps {
  car: Car;
}

function CarCard({ car }: CarProps) {
  const [retryCount, setRetryCount] = useState(0);

  const handleImageError = () => {
    if (retryCount < 3) {
      setRetryCount(retryCount + 1);
    }
  };

  const handleImageLoad = () => {
    setRetryCount(0);
  };

  return (
    <div className="group bg-slate-200 p-2 hover:bg-white hover:border-[1px] cursor-pointer duration-200 border-blue-500 rounded-xl w-64 mb-12">
      <h2 className="text-xl font-medium mb-2">{car.name}</h2>
      <h3 className="text-2xl font-bold mb-2">
        <span className="text-xs font-light">$</span>
        {car.price}
        <span className="text-xs font-light"> /day</span>
      </h3>
      <Image
        src={`${
          car.image?.url || "/cars/Rang rover blue SUV.png"
        }?retry=${retryCount}`}
        alt={car.name || "N/A"}
        width={220}
        height={200}
        className="w-60 h-36 mb-3 object-contain"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      <div className="flex justify-evenly">
        <div className="text-center text-gray-500">
          <PiSteeringWheelFill className="w-full text-xl mb-2" />
          <h2 className="text-sm font-light">{car.carType || "N/A"}</h2>
        </div>
        <div className="text-center text-gray-500">
          <MdAirlineSeatReclineNormal className="w-full text-xl mb-2" />
          <h2 className="text-sm font-light">
            {car.seat ? `${car.seat} Seat` : "Unknown Seats"}
          </h2>
        </div>
        <div className="text-center text-gray-500">
          <FaGasPump className="w-full text-xl mb-2" />
          <h2 className="text-sm font-light">
            {car.price ? `${car.price} MPG` : "N/A MPG"}
          </h2>
        </div>
      </div>
      <button className="hidden group-hover:flex justify-between py-2 px-5 rounded-lg text-white bg-gradient-to-r from-blue-400 to-blue-600 w-full">
        Rent Now
      </button>
    </div>
  );
}

export default CarCard;
