import moment from "moment";
import Search from "./Search";

const Header = ({ userData, getSearch, weatherData }) => {
  const date = new Date().toLocaleString();
  const time = new Date().toLocaleTimeString();

  return (
    <div className="container background">
      <div className="flex">
        {userData && (
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
              <div className="city">{userData.city}</div>
              <div className="country">{userData.country}</div>
            </div>
          </>
        )}
      </div>
      <Search getSearch={getSearch} weatherData={weatherData} />
    </div>
  );
};

export default Header;
