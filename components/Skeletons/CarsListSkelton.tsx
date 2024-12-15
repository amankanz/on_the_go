import React from "react";

interface CarsListSkeletonProps {
  count: number; // Number of skeleton cards to display
}

function CarsListSkeleton({ count }: CarsListSkeletonProps) {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-200 rounded-xl p-4 w-64 h-72 mb-12"
        >
          <div className="h-8 bg-gray-300 mb-4 rounded-md">Loading</div>
          <div className="h-6 bg-gray-300 mb-2 rounded-md">
            <span className="text-xs font-light">$</span>
            000
            <span className="text-xs font-light"> /day</span>
          </div>
          <div className="h-36 bg-gray-300 mb-4 rounded-lg"></div>
          <div className="flex justify-evenly">
            <div className="h-6 w-12 bg-gray-300 rounded-md">Type</div>
            <div className="h-6 w-fit bg-gray-300 rounded-md">0 Seat</div>
            <div className="h-6 w-fit bg-gray-300 rounded-md">0 MPG</div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CarsListSkeleton;
