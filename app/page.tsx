/*
"use client";

import CarsFilterOption from "@/components/Home/CarsFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import { Car } from "@/libs/types";

export default function Home() {
  const [carsList, setCarsList] = useState<Car[]>([]);

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result = await getCarsList();

    setCarsList(result.carLists);

    console.log("Car result:", result);
  };

  return (
    <main className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption />
      <CarsList carsList={carsList} />
    </main>
  );
}
*/

/*

"use client";

import CarsFilterOption from "@/components/Home/CarsFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import { Car } from "@/libs/types";

export default function Home() {
  const [carsList, setCarsList] = useState<Car[]>([]);

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result = await getCarsList();

    setCarsList(result.carLists);

    console.log("Car result:", result);
  };

  return (
    <main className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption />
      <CarsList carsList={carsList} />
    </main>
  );
}
*/

/*
"use client";

import CarsFilterOption from "@/components/Home/CarsFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import { Car } from "@/libs/types";

export default function Home() {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const LIMIT = 4; // Limit the number of cars to fetch to 4

  useEffect(() => {
    getCarList_(); // Fetch cars on component mount
  }, []);

  const getCarList_ = async () => {
    try {
      const result = await getCarsList(LIMIT); // Pass the limit as an argument
      setCarsList(result.carLists); // Update state with the fetched cars
      console.log("Fetched Cars:", result.carLists);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  return (
    <main className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption />
      <CarsList carsList={carsList} />
      <button
        onClick={getCarList_}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md mx-auto block"
      >
        Load More
      </button>
    </main>
  );
}
*/

/*
"use client";

import CarsFilterOption from "@/components/Home/CarsFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import { Car } from "@/libs/types";

export default function Home() {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false); // Button loading state
  const [fetchedCount, setFetchedCount] = useState(0); // Track total fetched cars
  const TOTAL_CARS = 31; // Total cars in the database
  const LIMIT = 4; // Number of cars to fetch per request

  useEffect(() => {
    getCarList_(); // Fetch initial batch of cars on component mount
  }, []);

  const getCarList_ = async () => {
    if (fetchedCount >= TOTAL_CARS) return; // Stop fetching if all cars are loaded

    setLoading(true); // Set loading state to true

    try {
      const result = await getCarsList(LIMIT); // Fetch 4 cars at a time
      setCarsList((prev) => [...prev, ...result.carLists]); // Append new cars to the list
      setFetchedCount((prev) => prev + result.carLists.length); // Update fetched count
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <main className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption />
      <CarsList carsList={carsList} />
      {fetchedCount < TOTAL_CARS && (
        <button
          onClick={getCarList_}
          className={`mt-6 px-6 py-2 rounded-md mx-auto block ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={loading} // Disable the button while loading
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </main>
  );
}
*/

"use client";

import CarsFilterOption from "@/components/Home/CarsFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import { Car } from "@/libs/types";

export default function Home() {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false); // Button loading state
  const [fetchedCount, setFetchedCount] = useState(0); // Track total fetched cars
  const TOTAL_CARS = 31; // Total cars in the database
  const LIMIT = 4; // Number of cars to fetch per request

  useEffect(() => {
    getCarList_(); // Fetch initial batch of cars on component mount
  }, []);

  const getCarList_ = async () => {
    if (fetchedCount >= TOTAL_CARS) return; // Stop fetching if all cars are loaded

    setLoading(true); // Set loading state to true

    try {
      const result = await getCarsList(LIMIT); // Fetch 4 cars at a time

      setCarsList((prev) => {
        // Merge current list with new cars, filtering out duplicates by ID
        const uniqueCars = [
          ...prev,
          ...result.carLists.filter(
            (newCar) =>
              !prev.some((existingCar) => existingCar.id === newCar.id)
          ),
        ];
        return uniqueCars;
      });

      setFetchedCount((prev) => prev + result.carLists.length); // Update fetched count
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <main className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption />
      <CarsList carsList={carsList} />
      {fetchedCount < TOTAL_CARS && (
        <button
          onClick={getCarList_}
          className={`mt-6 px-6 py-2 rounded-md mx-auto block ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={loading} // Disable the button while loading
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </main>
  );
}
