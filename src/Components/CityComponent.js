import React from "react";

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <img
        src={"icons/perfect-day.png"}
        className="w-40 h-40 mx-auto my-5"
        alt="Weather Logo"
      />
      <span className="text-[#446ba5] text-md font-semibold block text-center">
        Find Weather of your city
      </span>
      <form
        onSubmit={fetchWeather}
        className="flex flex-row justify-around items-center m-5 border-black border-2 rounded-md"
      >
        <input
          onChange={(e) => updateCity(e.target.value)}
          className="px-4 py-2 text-base font-semibold text-[#5b3e31] focus:outline-none "
          type="text"
          placeholder="City"
          required
        />
        <button
          type="submit"
          class="bg-[#7c736c] text-white text-base px-4 py-2 font-semibold focus:outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 "
        >
          Search
        </button>


      </form>
    </>
  );
};

export default CityComponent;
