import humidity from "../images/humidity.png";
import windSpeed from "../images/wind.png";
import pressure from "../images/pressure.png";

const Weather = ({ weatherData }) => {
  function convertToFahrenheit(temp) {
    const fahrenheit = (temp * 9) / 5 + 32;

    return fahrenheit;
  }

  const imgSource = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  return (
    <div className="data">
      <div className="container">
        {weatherData && (
          <>
            <div className="grid">
              <div className="weather grid">
                <div className="weather-icon description">
                  <img
                    className="img-source"
                    src={imgSource}
                    alt="weather icon"
                  />
                  <h4>{weatherData.weather[0].description}</h4>
                  <h6>Forecast for {weatherData.name}</h6>
                </div>
                <div className="weather-temp">
                  <div className="celsius">
                    <h1 className="degree">
                      {Math.round(weatherData.main.temp)} &deg;{" "}
                    </h1>
                    <span>- Celsius</span>
                  </div>
                  <div className="fahrenheit">
                    <h1 className="degree">
                      {Math.round(convertToFahrenheit(weatherData.main.temp))}{" "}
                      &deg;
                    </h1>
                    <span>- Fahrenheit</span>
                  </div>
                </div>
              </div>
              <div className="description grid grid-3">
                <div className="humidity">
                  <img className="desc-images" src={humidity} alt="humidity" />
                  <h3>
                    <strong>Humidity</strong>
                  </h3>
                  <h6>{weatherData.main.humidity} %</h6>
                </div>
                <div className="wind-speed">
                  <img
                    className="desc-images"
                    src={windSpeed}
                    alt="wind speed"
                  />
                  <h3>
                    <strong>Wind Speed</strong>
                  </h3>
                  <h6>{weatherData.wind.speed} m/s</h6>
                </div>
                <div className="pressure">
                  <img className="desc-images" src={pressure} alt="pressure" />
                  <h3>
                    <strong>Pressure</strong>
                  </h3>
                  <h6>{weatherData.main.pressure} hpa</h6>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
