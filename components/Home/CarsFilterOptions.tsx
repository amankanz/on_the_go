import React from "react";

function CarsFilterOption() {
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
        >
          <option disabled>Price</option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select
          className="select select-bordered hidden lg:block w-full max-w-xs"
          defaultValue={"Manufacturer"}
        >
          <option disabled>Manufacturer</option>
          <option>BMW</option>
          <option>Mercedes-Benz</option>
          <option>Rang Rover</option>
          <option>Audi</option>
          <option>GMC</option>
          <option>Tesla</option>
          <option>Toyota</option>
          <option>Nissan</option>
          <option>Mitsubishi</option>
          <option>Subaru</option>
        </select>
      </div>
    </section>
  );
}

export default CarsFilterOption;