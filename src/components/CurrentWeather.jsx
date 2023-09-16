import { Col, Row } from "react-bootstrap";
import DayForecast from "./DayForecast";

const CurrentWeather = (props) => {
  return (
    <>
      {props.nextDaysWeather && props.currentWeather && (
        <div id="main">
          <img
            src={`https://openweathermap.org/img/wn/${props.nextDaysWeather.list[0].weather[0].icon}@2x.png`}
            alt="icon"
            id="icona"
          />
          <p className="text-center m-0 ">{`${(props.currentWeather.main.temp - 273.15).toFixed(1)}°`}</p>
        </div>
      )}
    </>
  );
};
export default CurrentWeather;
