import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // const [accuracy, setAccuracy] = useState("User location may not be accurate");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch("http://ip-api.com/json")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setLatitude(data.lat);
    //     setLongitude(data.lon);
    //     setUserData(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setError(error);
    //   });
    const successCallback = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };

    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=40547464b0a67a8f5d0e5fcd1364a8fe`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          console.log(data);
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
        if (data.cod === "404") {
          // const message = data.message;
          setError(data.message);
          setTimeout(() => {
            setError("");
          }, 2000);
        } else {
          setWeatherData(data);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <div className="body">
      {!weatherData ? (
        <div className="loading">Loading....</div>
      ) : (
        <>
          {error && <div style={{ textAlign: "center" }}>{error}</div>}
          {weatherData && (
            <Header
              weatherData={weatherData}
              getSearch={getSearch}
              error={error}
            />
          )}
          {weatherData && <Weather weatherData={weatherData} />}
        </>
      )}
    </div>
  );
};

export default App;
