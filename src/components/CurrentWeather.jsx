import { Col, Row } from "react-bootstrap";
import DayForecast from "./DayForecast";

const CurrentWeather = (props) => {
  return (
    <>
      <div id="main">
        <img
          src={`https://openweathermap.org/img/wn/${props.currentWeather.weather[0].icon}@2x.png`}
          alt="icon"
          id="icona"
        />
        <p className="text-center m-0 ">{`${(props.currentWeather.main.temp - 273.15).toFixed(1)}°`}</p>
      </div>
    </>
  );
};
export default CurrentWeather;
