import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [userData, setUserData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://ip-api.com/json")
      .then((response) => response.json())
      .then((data) => {
        setLatitude(data.lat);
        setLongitude(data.lon);
        setUserData(data);
      })
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=40547464b0a67a8f5d0e5fcd1364a8fe`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => console.log(error));
    }
  }, [latitude, longitude]);

  const getSearch = (search) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=40547464b0a67a8f5d0e5fcd1364a8fe`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => setError(error));
  };

  return (
    <div className="body">
      {weatherData && (
        <Header
          weatherData={weatherData}
          getSearch={getSearch}
          userData={userData}
        />
      )}
      {error ? <p>{error.message}</p> : null}
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
};

export default App;
