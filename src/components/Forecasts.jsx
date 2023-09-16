import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Forecasts = (props) => {
  const [forecast, setForecast] = useState(null);
  const timeConverter = (data) => {
    let a = new Date(data * 1000);
    const date = a.getDate();
    let hour = a.getHours();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    if (hour + 2 === 24) hour = 0;
    return [date, hour, `${date}-${month}`];
  };
  useEffect(() => {
    if (props.nextDaysWeather) setForecast(props.nextDaysWeather.list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.nextDaysWeather]);
  return (
    <div className="shadow p-4 forecast">
      <h4 className="pt-4" style={{ fontWeight: "300" }}>
        5-days Forecast
      </h4>
      {forecast && (
        <div className=" mt-5 gy-4" style={{ overflowX: "scroll" }}>
          {forecast.map(
            (elem, index) =>
              timeConverter(elem.dt)[1] === timeConverter(forecast[0].dt)[1] && (
                <Row className="align-items-center singForecast">
                  <Col xs={3}>
                    <span className="pt-2">{timeConverter(elem.dt)[2]}</span>
                  </Col>
                  <Col xs={3}>
                    {" "}
                    <div>
                      <img
                        src={`https://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`}
                        alt="logo"
                        width="100%"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    {" "}
                    <span>{` ${elem.weather[0].main}`}</span>
                  </Col>
                  <Col xs={3}>
                    {" "}
                    <span>{`Temp: ${(elem.main.temp - 273.15).toFixed(1)}°`}</span>
                  </Col>
                </Row>
              )
          )}
        </div>
      )}
    </div>
  );
};
export default Forecasts;
