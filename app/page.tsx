/*
"use client";

import CarsFilterOption from "@/components/Home/CarsFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import { Car } from "@/libs/types";
import ToastMsg from "@/components/ToastMsg";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";

export default function Home() {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchedCount, setFetchedCount] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<number | null>(null); // State for sorting order
  // const [showToastMsg, setShowToastMsg] = useState<boolean>(false);
  const [showToastMsg, setShowToastMsg] = useState<string | null>(null);

  const TOTAL_CARS = 31; // Total cars in the database
  const LIMIT = 4;

  useEffect(() => {
    if (showToastMsg) {
      setTimeout(() => {
        setShowToastMsg(null);
      }, 5000);
    }
  }, [showToastMsg]);

  // Fetch cars on mount
  useEffect(() => {
    getCarList_();
  }, []);

  // Filter and sort cars when dependencies change
  useEffect(() => {
    let updatedCars = [...carsList];

    // Filter by brand
    if (selectedBrand) {
      updatedCars = updatedCars.filter((car) => car.carBrand === selectedBrand);
    }

    // Sort by price
    if (sortOrder !== null) {
      updatedCars.sort((a, b) =>
        sortOrder === -1 ? a.price - b.price : b.price - a.price
      );
    }

    setFilteredCars(updatedCars);
  }, [selectedBrand, sortOrder, carsList]);

  const getCarList_ = async () => {
    if (fetchedCount >= TOTAL_CARS) return;

    setLoading(true);
    try {
      const result = await getCarsList(LIMIT);
      setCarsList((prev) => [
        ...prev,
        ...result.carLists.filter(
          (newCar) => !prev.some((existingCar) => existingCar.id === newCar.id)
        ),
      ]);
      setFetchedCount((prev) => prev + result.carLists.length);
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-5 sm:px-10 md:px-20">
      <BookCreatedFlagContext.Provider
        value={{ showToastMsg, setShowToastMsg }}
      >
        <Hero />
        <SearchInput />
        <CarsFilterOption
          carsOrgList={carsList}
          setBrand={setSelectedBrand} // Pass handler to update selected brand
          orderCarList={setSortOrder} // Pass handler to update sort order
        />
        <CarsList carsList={filteredCars} />{" "}
        {/* Pass filtered and sorted cars =/}
        {showToastMsg && <ToastMsg msg={showToastMsg} />}
        {fetchedCount < TOTAL_CARS && (
          <button
            onClick={getCarList_}
            className={`mt-6 px-6 py-2 rounded-md mx-auto block ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
      </BookCreatedFlagContext.Provider>
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
import { useEffect, useRef, useState } from "react";
import { Car } from "@/libs/types";
import ToastMsg from "@/components/ToastMsg";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";

export default function Home() {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchedCount, setFetchedCount] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<number | null>(null);
  const [showToastMsg, setShowToastMsg] = useState<string | null>(null);

  const carsSectionRef = useRef<HTMLDivElement>(null); // Reference for scrolling
  const filtersSectionRef = useRef<HTMLDivElement>(null); // Reference for scrolling

  const TOTAL_CARS = 31;
  const LIMIT = 4;

  useEffect(() => {
    if (showToastMsg) {
      setTimeout(() => {
        setShowToastMsg(null);
      }, 5000);
    }
  }, [showToastMsg]);

  useEffect(() => {
    getCarList_();
  }, []);

  // useEffect(() => {
  //   let updatedCars = [...carsList];
  //   if (selectedBrand) {
  //     updatedCars = updatedCars.filter((car) => car.carBrand === selectedBrand);
  //   }
  //   if (sortOrder !== null) {
  //     updatedCars.sort((a, b) =>
  //       sortOrder === -1 ? a.price - b.price : b.price - a.price
  //     );
  //   }
  //   setFilteredCars(updatedCars);
  // }, [selectedBrand, sortOrder, carsList]);

  // Filter and sort cars when dependencies change
  useEffect(() => {
    let updatedCars = [...carsList];

    // Filter by brand
    if (selectedBrand) {
      updatedCars = updatedCars.filter((car) => car.carBrand === selectedBrand);
    }

    // Sort by price
    if (sortOrder !== null) {
      updatedCars.sort((a, b) =>
        sortOrder === -1 ? a.price - b.price : b.price - a.price
      );
    }

    setFilteredCars(updatedCars);
  }, [selectedBrand, sortOrder, carsList]);

  const getCarList_ = async () => {
    if (fetchedCount >= TOTAL_CARS) return;
    setLoading(true);
    try {
      const result = await getCarsList(LIMIT);
      setCarsList((prev) => [
        ...prev,
        ...result.carLists.filter(
          (newCar) => !prev.some((existingCar) => existingCar.id === newCar.id)
        ),
      ]);
      setFetchedCount((prev) => prev + result.carLists.length);
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    filtersSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="p-5 sm:px-10 md:px-20">
      <BookCreatedFlagContext.Provider
        value={{ showToastMsg, setShowToastMsg }}
      >
        <Hero onScrollToFilters={handleScroll} />
        <SearchInput />
        <div ref={filtersSectionRef}>
          <CarsFilterOption
            carsOrgList={carsList}
            setBrand={setSelectedBrand}
            orderCarList={setSortOrder}
          />
        </div>
        <div ref={carsSectionRef}>
          <CarsList carsList={filteredCars} />
        </div>
        {/* Pass filtered and sorted cars */}
        {showToastMsg && <ToastMsg msg={showToastMsg} />}
        {fetchedCount < TOTAL_CARS && (
          <button
            onClick={getCarList_}
            className={`mt-6 px-6 py-2 rounded-md mx-auto block ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
      </BookCreatedFlagContext.Provider>
    </main>
  );
}
