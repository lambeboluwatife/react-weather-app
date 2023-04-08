import moment from "moment";
import Search from "./Search";

const Header = ({ getSearch, weatherData, error }) => {
  const date = new Date().toLocaleString();
  const time = new Date().toLocaleTimeString();

  return (
    <div className="container background">
      <div className="flex">
        {weatherData && (
          <>
            <div className="date-time">
              <div className="time">
                {moment(time, "HH:mm").format("hh:mm A")}
              </div>
              <div className="date">
                {moment(date).format("dddd, MMMM DD, YYYY")}
              </div>
            </div>
            <div className="location">
              <div className="city">{weatherData.name}</div>
              <div className="country">{weatherData.sys.country}</div>
            </div>
          </>
        )}
      </div>
      <Search getSearch={getSearch} weatherData={weatherData} error={error} />
    </div>
  );
};

export default Header;
