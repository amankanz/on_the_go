/*
import React from "react";

function SearchInput() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-center text-xl text-slate-500 mb-3">
        Find Your Ride in Seconds
      </h2>
      <div className="flex justify-center">
        <div className="flex bg-slate-200 px-5 gap-2 rounded-full ">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-slate-900"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="text"
              placeholder="Location"
              className="p-2 outline-none bg-transparent"
            />
          </div>
          <div>
            <input
              type="date"
              className="p-2 outline-none bg-transparent text-gray-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchInput;
*/

import React from "react";

function SearchInput() {
  return (
    <section className="hidden md:flex lg:flex flex-col items-center">
      <h2 className="text-center text-xl text-slate-500 mb-3">
        Book Your Ride with OnTheGo
      </h2>
      <div className="flex justify-center">
        <div className="flex bg-slate-200 px-5 gap-4 rounded-full items-center">
          {/* Location Input */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-slate-900"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Enter your pickup location"
              className="p-2 outline-none bg-transparent"
            />
          </div>
          {/* Destination Input */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-slate-900"
            >
              <path
                fillRule="evenodd"
                d="M12 2a7 7 0 0 1 7 7c0 2.485-1.564 4.775-3.5 6.083V18a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2.917C6.564 13.775 5 11.485 5 9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5c0 1.72 1.085 3.333 2.5 4.3V16h5v-4.7c1.415-.967 2.5-2.58 2.5-4.3a5 5 0 0 0-5-5Zm-2.5 5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Enter your destination"
              className="p-2 outline-none bg-transparent"
            />
          </div>
          {/* Date Input */}
          <div>
            <input
              type="date"
              className="p-2 outline-none bg-transparent text-gray-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchInput;
