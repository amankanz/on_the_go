import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { StoreLocation, StoreLocations, Car } from "@/libs/types";
import { createBooing, storeLocations } from "@/services";

interface CarProps {
  car: Car;
}

// Forward ref to access the form methods
const Form = forwardRef(({ car }: CarProps, ref) => {
  const [storeLocation, setStoreLocation] = useState<StoreLocation[]>([]);
  const [formValue, setFormValue] = useState({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    userName: "`+formValue.userName+",
    carId: "",
  });

  useEffect(() => {
    if (car) {
      setFormValue({
        ...formValue,
        carId: car.id,
      });
    }
  }, [car]);

  useEffect(() => {
    getStoreLocations_();
  }, []);

  const getStoreLocations_ = async () => {
    try {
      const response: StoreLocations = await storeLocations();
      console.log("Store Locations", response);
      setStoreLocation(response.storeLocations);
    } catch (error) {
      console.error("Failed to fetch store locations:", error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await createBooing(formValue); // Pass formValue directly
      console.log("Booking response:", response);
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  // Expose `handleSubmit` to parent via the ref
  useImperativeHandle(ref, () => ({
    handleSubmit,
  }));

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label htmlFor="location" className="flex flex-col w-full mb-5">
          Pick Up Location
        </label>
        <select
          name="location"
          id="location"
          defaultValue={"PickUp Location?"}
          className="select selected-border w-full max-w-xs"
          onChange={handleChange}
        >
          <option disabled>PickUp Location?</option>
          {storeLocation.map((location, index) => (
            <option key={index}>{location.address}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-5 mb-4">
        <div className="flex flex-col w-full">
          <label htmlFor="pickUpDate" className="text-gray-400">
            Pick Up Date
          </label>
          <input
            type="date"
            id="pickUpDate"
            className="input input-bordered w-full max-w-lg"
            name="pickUpDate"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="dropOffDate" className="text-gray-400">
            Drop Off Date
          </label>
          <input
            type="date"
            id="dropOffDate"
            className="input input-bordered w-full max-w-lg"
            name="dropOffDate"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex gap-5 mb-4">
        <div className="flex flex-col w-full">
          <label htmlFor="pickUpTime" className="text-gray-400">
            Pick Up Time
          </label>
          <input
            type="time"
            id="pickUpTime"
            className="input input-bordered w-full max-w-lg"
            name="pickUpTime"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="dropOffTime" className="text-gray-400">
            Drop Off Time
          </label>
          <input
            type="time"
            id="dropOffTime"
            className="input input-bordered w-full max-w-lg"
            name="dropOffTime"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="contactNumber" className="text-gray-400">
          Contact Number
        </label>
        <input
          type="number"
          id="contactNumber"
          className="input input-bordered w-full max-w-lg"
          name="contactNumber"
          onChange={handleChange}
        />
      </div>
    </div>
  );
});

// Set the display name for debugging
Form.displayName = "Form";

export default Form;

/*
import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useContext,
} from "react";
import { StoreLocation, StoreLocations, Car } from "@/libs/types";
import { createBooing, storeLocations } from "@/services";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";

interface CarProps {
  car: Car;
}

// Forward ref to access the form methods
const Form = forwardRef(({ car }: CarProps, ref) => {
  const [storeLocation, setStoreLocation] = useState<StoreLocation[]>([]);
  const [formValue, setFormValue] = useState({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    userName: "Amani Ziha",
    carId: "",
  });

  const { showToastMsg, setShowToastMsg } = useContext(BookCreatedFlagContext);

  useEffect(() => {
    if (car) {
      setFormValue({
        ...formValue,
        carId: car.id,
      });
    }
  }, [car]);

  useEffect(() => {
    getStoreLocations_();
  }, []);

  const getStoreLocations_ = async () => {
    try {
      const response: StoreLocations = await storeLocations();
      console.log("Store Locations", response);
      setStoreLocation(response.storeLocations);
    } catch (error) {
      console.error("Failed to fetch store locations:", error);
    }
  };

  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   setFormValue({
  //     ...formValue,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitting formValue:", formValue); // Debug log
      const response = await createBooing(formValue); // Pass formValue directly
      console.log("Booking response:", response);

      if (response) setShowToastMsg(true);
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  // Expose `handleSubmit` to parent via the ref
  useImperativeHandle(ref, () => ({
    handleSubmit,
  }));

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label htmlFor="location" className="flex flex-col w-full mb-5">
          Pick Up Location
        </label>
        <select
          name="location"
          id="location"
          defaultValue={"PickUp Location?"}
          className="select selected-border w-full max-w-xs"
          onChange={handleChange}
        >
          <option disabled>PickUp Location?</option>
          {storeLocation.map((location, index) => (
            <option key={index}>{location.address}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-5 mb-4">
        <div className="flex flex-col w-full">
          <label htmlFor="pickUpDate" className="text-gray-400">
            Pick Up Date
          </label>
          <input
            type="date"
            id="pickUpDate"
            className="input input-bordered w-full max-w-lg"
            name="pickUpDate"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="dropOffDate" className="text-gray-400">
            Drop Off Date
          </label>
          <input
            type="date"
            id="dropOffDate"
            className="input input-bordered w-full max-w-lg"
            name="dropOffDate"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex gap-5 mb-4">
        <div className="flex flex-col w-full">
          <label htmlFor="pickUpTime" className="text-gray-400">
            Pick Up Time
          </label>
          <input
            type="time"
            id="pickUpTime"
            className="input input-bordered w-full max-w-lg"
            name="pickUpTime"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="dropOffTime" className="text-gray-400">
            Drop Off Time
          </label>
          <input
            type="time"
            id="dropOffTime"
            className="input input-bordered w-full max-w-lg"
            name="dropOffTime"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="contactNumber" className="text-gray-400">
          Contact Number
        </label>
        <input
          type="number"
          id="contactNumber"
          className="input input-bordered w-full max-w-lg"
          name="contactNumber"
          onChange={handleChange}
        />
      </div>
    </div>
  );
});

// Set the display name for debugging
Form.displayName = "Form";

export default Form;
*/
