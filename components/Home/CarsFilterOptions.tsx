/*
import React, { useEffect, useState } from "react";
import { Car } from "@/libs/types";

interface CarsOrgListProps {
  carsOrgList: Car[];
  setBrand: (value: string) => void;
  orderCarList: (value: string) => void;
}

function CarsFilterOption({
  carsOrgList,
  setBrand,
  orderCarList,
}: CarsOrgListProps) {
  const [brandList, setBrandList] = useState<string[]>([]);

  const carsBrandGroup = new Set();

  useEffect(() => {
    if (carsOrgList) filterCarsList();
  }, [carsOrgList]);

  const filterCarsList = () => {
    carsOrgList.forEach((element) => {
      carsBrandGroup.add(element.carBrand);
    });

    console.log("Brand List:", carsBrandGroup);

    setBrandList(Array.from(carsBrandGroup));
  };

  return (
    <section className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-extrabold">Cars Catalog</h2>
        <h2 className="mt-2">Browse Our Top Picks for Your Journey</h2>
      </div>
      <div className="flex gap-5">
        <select
          className="select select-bordered w-full max-w-xs"
          defaultValue={"Price"}
          onChange={(e) => orderCarList(e.target.value)}
        >
          <option disabled>Price</option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          className="select select-bordered hidden lg:block w-full max-w-xs"
          defaultValue={"Manufacturer"}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled>Manufacturer</option>
          {brandList &&
            brandList.map((brand: string, index) => (
              <option key={index}>{brand}</option>
            ))}
        </select>
      </div>
    </section>
  );
}

export default CarsFilterOption;
*/

/*
import React, { useEffect, useState } from "react";
import { Car } from "@/libs/types";

interface CarsOrgListProps {
  carsOrgList: Car[];
  setBrand: (value: string | null) => void; // Update to allow resetting
  orderCarList: (value: string) => void;
}

function CarsFilterOption({
  carsOrgList,
  setBrand,
  orderCarList,
}: CarsOrgListProps) {
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    if (carsOrgList) filterCarsList();
  }, [carsOrgList]);

  const filterCarsList = () => {
    const carsBrandGroup = new Set<string>();
    carsOrgList.forEach((car) => {
      carsBrandGroup.add(car.carBrand);
    });

    setBrandList(Array.from(carsBrandGroup));
  };

  return (
    <section className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-extrabold">Cars Catalog</h2>
        <h2 className="mt-2">Browse Our Top Picks for Your Journey</h2>
      </div>
      <div className="flex gap-5">
        <select
          className="select select-bordered w-full max-w-xs"
          defaultValue={"Price"}
          onChange={(e) => orderCarList(e.target.value)}
        >
          <option disabled>Price</option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          className="select select-bordered hidden lg:block w-full max-w-xs"
          defaultValue={""}
          onChange={(e) => setBrand(e.target.value || null)} // Allow resetting
        >
          <option value="">Manufacturer</option> {/* Reset option =/}
          {brandList.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default CarsFilterOption;
*/

import React, { useEffect, useState } from "react";
import { Car } from "@/libs/types";

interface CarsOrgListProps {
  carsOrgList: Car[];
  setBrand: (value: string | null) => void; // Update to allow resetting
  orderCarList: (value: number) => void; // Update type to handle numeric sort order
}

function CarsFilterOption({
  carsOrgList,
  setBrand,
  orderCarList,
}: CarsOrgListProps) {
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    if (carsOrgList) filterCarsList();
  }, [carsOrgList]);

  const filterCarsList = () => {
    const carsBrandGroup = new Set<string>();
    carsOrgList.forEach((car) => {
      carsBrandGroup.add(car.carBrand);
    });

    setBrandList(Array.from(carsBrandGroup));
  };

  return (
    <section className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-extrabold">Cars Catalog</h2>
        <h2 className="mt-2">Browse Our Top Picks for Your Journey</h2>
      </div>
      <div className="flex gap-5">
        <select
          className="select select-bordered w-full max-w-xs"
          defaultValue={"Price"}
          onChange={(e) => orderCarList(Number(e.target.value))} // Pass numeric value
        >
          <option disabled>Price</option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          className="select select-bordered hidden lg:block w-full max-w-xs"
          defaultValue={""}
          onChange={(e) => setBrand(e.target.value || null)} // Allow resetting
        >
          <option value="">Manufacturer</option> {/* Reset option */}
          {brandList.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default CarsFilterOption;
