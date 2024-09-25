import React from "react";
import { FaBookOpen } from "react-icons/fa";

function Card() {
  return (
    <div className="flex justify-between mx-12 gap-10">
      <div className="flex transition-transform duration-300 ease-in-out justify-center my-10">
        <a
          href="/"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <div className="flex items-center mb-4">
            <FaBookOpen className="text-4xl text-lightgraycolor mr-2 transition-transform duration-300 ease-in-out transform hover:scale-110" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 transition-colors duration-300 ease-in-out hover:text-blue-500">
              Request For FYP
            </h5>
          </div>
          <p className="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </a>
      </div>

      <div className="flex justify-center my-10">
        <a
          href="/"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <div className="flex transition-transform duration-300 ease-in-out items-center mb-4">
            <FaBookOpen className="text-4xl text-lightgraycolor mr-2 transition-transform duration-300 ease-in-out transform hover:scale-110" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 transition-colors duration-300 ease-in-out hover:text-blue-500">
              Request For FYP
            </h5>
          </div>
          <p className="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </a>
      </div>

      <div className="flex justify-center my-10">
        <a
          href="/"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <div className="flex  transition-transform duration-300 ease-in-out items-center mb-4">
            <FaBookOpen className="text-4xl text-lightgraycolor mr-2 transition-transform duration-300 ease-in-out transform hover:scale-110" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 transition-colors duration-300 ease-in-out hover:text-blue-500">
              Request For FYP
            </h5>
          </div>
          <p className="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </a>
      </div>
    </div>
  );
}

export default Card;
