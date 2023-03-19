import moment from "moment";

const Header = ({ weatherData }) => {
  const date = new Date().toLocaleString();
  const time = new Date().toLocaleTimeString();

  return (
    <div className="container background">
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
  );
};

export default Header;
