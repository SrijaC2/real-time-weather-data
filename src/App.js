import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./Components/CityComponent";
import WeatherComponent from "./Components/GetWeatherInfo";

export const WeatherIcons = {
  "01d": "icons/sunny.png",
  "01n": "icons/night.png",
  "02d": "icons/day.png",
  "02n": "icons/cloudy-night.png",
  "03d": "icons/cloudy.png",
  "03n": "icons/cloudy.png",
  "04d": "icons/perfect-day.png",
  "04n": "icons/cloudy-night.png",
  "09d": "icons/rain.png",
  "09n": "icons/rain-night.png",
  "10d": "icons/rain.png",
  "10n": "icons/rain-night.png",
  "11d": "icons/storm.png",
  "11n": "icons/storm.png",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 6px;
  box-shadow: 0 6px 10px 0 #65b4dc;
  background: white;
  font-family: Montserrat;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [flashMessage, setFlashMessage] = useState("");
  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
      );
      updateWeather(response.data);
      setFlashMessage("");
    } catch (error) {
      setFlashMessage("Failed to fetch weather. Check city!");
      console.error("Weather fetch error:", error);
    }
  };

  const handleHomeClick = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="mb-4">
        <nav className="bg-gradient-to-r from-gray-800 to-gray-600">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="flex flex-1 items-center justify-center ">
                <div className="m-7"></div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex justify-between items-center px-4">
                    <p className="bg-gradient-to-r from-teal-300 to-white text-gray-800 rounded-md px-3 py-2 text-md font-semibold font-serif">Real Time Weather Data</p>
                  </div>
                </div>
              </div>
              <button onClick={handleHomeClick} className="bg-gray-900 rounded text-white px-3 my-3 mr-6 font-medium hover:bg-teal-200 hover:text-gray-800 font-serif">Home</button>
            </div>
          </div>
        </nav>
      </div>


      {flashMessage && (
        <div className="text-center flex items-center justify-center m-2  ">
          <span className="text-white flex gap-1 bg-[#4F93DF] rounded-lg p-3 shadow-md font-medium"><img src="icons/error.png" alt="Error icon" /> {flashMessage}</span>
        </div>

      )}
      <Container >
        <h2 className="text-center font-bold text-md text-gray-600">Forecasting Secrets: Uncover Nature's Whispers with React Weather</h2>
        {city && weather ? (
          <WeatherComponent weather={weather} city={city} />
        ) : (
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
        )}
      </Container>

    </>

  );
}

export default App;