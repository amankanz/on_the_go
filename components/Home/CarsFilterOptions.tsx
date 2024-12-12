import React from "react";

function CarsFilterOption() {
  return (
    <section>
      <div>
        <h2 className="text-3xl font-extrabold mt-10">Cars Catalog</h2>
        <h2>Browse Our Top Picks for Your Journey</h2>
      </div>
      <div>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
      </div>
    </section>
  );
}

export default CarsFilterOption;
