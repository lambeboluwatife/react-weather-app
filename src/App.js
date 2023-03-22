import { useState, useEffect } from "react";
// import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [weatherData, setWeatherData] = useState(null);

  // const successCallback = (position) => {
  //   setLatitude(position.coords.latitude);
  //   setLongitude(position.coords.longitude);
  // };

  // const errorCallback = (error) => {
  //   console.log(error);
  // };

  // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocation);
    } else {
      alert("geolocation is not supported on this browser");
    }
  }

  function showLocation(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  getLocation();

  // const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=40547464b0a67a8f5d0e5fcd1364a8fe`;
  const URL =
    "https://api.openweathermap.org/data/2.5/weather?q=lagos&units=metric&APPID=40547464b0a67a8f5d0e5fcd1364a8fe";

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    setWeatherData(data);
  };

  console.log(weatherData);

  return (
    <div className="">
      {weatherData && <Header weatherData={weatherData} />}
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
};

export default App;
