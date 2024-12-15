import { StoreLocation, StoreLocations } from "@/libs/types";
import { storeLocations } from "@/services";
import React, { useEffect, useState } from "react";

function Form() {
  const [storeLocation, setStoreLocation] = useState<StoreLocation[]>([]); // Array of StoreLocation
  const [formValue, setFormValue] = useState();

  useEffect(() => {
    getStoreLocations_();
  }, []);

  const getStoreLocations_ = async () => {
    try {
      const response: StoreLocations = await storeLocations();
      console.log("Store Locations", response);
      setStoreLocation(response.storeLocations); // Assign array to state
    } catch (error) {
      console.error("Failed to fetch store locations:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label htmlFor="" className="flex flex-col w-full mb-5">
          Pick Up Location
        </label>
        <select
          name=""
          id=""
          defaultValue={"PickUp Location?"}
          className="select selected-border w-full max-w-xs"
        >
          <option disabled>PickUp Location?</option>
          {storeLocation.map((location, index) => (
            <option key={index}>{location.address}</option> // Use location.address
          ))}
        </select>
      </div>

      <div className="flex gap-5 mb-4">
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-gray-400">
            Pick Up Date
          </label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-gray-400">
            Drop Off Date
          </label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex gap-5 mb-4">
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-gray-400">
            Pick Up Time
          </label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-gray-400">
            Drop Off Time
          </label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="" className="text-gray-400">
          Contact Number
        </label>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
    </div>
  );
}

export default Form;
