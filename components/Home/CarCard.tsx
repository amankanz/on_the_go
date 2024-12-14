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
  const [newCar, setNewCar] = useState(car);
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
      <h2 className="text-xl font-medium mb-2">{newCar.name}</h2>
      <h3 className="text-2xl font-bold mb-2">
        <span className="text-xs font-light">$</span>
        {newCar.price}
        <span className="text-xs font-light"> /day</span>
      </h3>
      <Image
        src={`${car.image?.url}?retry=${retryCount}`}
        alt={newCar.name}
        width={220}
        height={200}
        className="w-60 h-36 mb-3 object-contain"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      <div className="flex justify-evenly group-hover:hidden">
        <div className="text-center text-gray-500">
          <PiSteeringWheelFill className="w-full text-xl mb-2" />
          <h2 className="line-clamp-5 text-sm font-light">
            {newCar.carType || "N/A"}
          </h2>
        </div>
        <div className="text-center text-gray-500">
          <MdAirlineSeatReclineNormal className="w-full text-xl mb-2" />
          <h2 className="line-clamp-5 text-sm font-light">
            {newCar.seat ? `${newCar.seat} Seat` : "Unknown Seats"}
          </h2>
        </div>
        <div className="text-center text-gray-500">
          <FaGasPump className="w-full text-xl mb-2" />
          <h2 className="line-clamp-5 text-sm font-light">
            {newCar.price ? `${newCar.price} MPG` : "N/A MPG"}
          </h2>
        </div>
      </div>

      <button className="hidden group-hover:flex justify-between py-2 px-5 rounded-lg text-white bg-gradient-to-r from-blue-400 to-blue-600 w-full">
        <span className="">Rent Now</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 bg-blue-300 rounded-md p-1 text-white"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default CarCard;
