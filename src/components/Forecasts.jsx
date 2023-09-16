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
    return [date, hour, `${date}-${month}-${year}`];
  };
  useEffect(() => {
    if (props.nextDaysWeather) setForecast(props.nextDaysWeather.list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.nextDaysWeather]);
  return (
    <>
      <h4>5-days Forecast</h4>
      {forecast && (
        <Row className="justify-content-center mt-5 gy-4">
          {forecast.map(
            (elem, index) =>
              timeConverter(elem.dt)[1] === timeConverter(forecast[0].dt)[1] && (
                <Col key={`${index}`} xs={6} sm={4} md={3} lg={2}>
                  <Card
                    className="shadow forecastCard"
                    style={{
                      backgroundColor: "#7a7cce",
                      textAlign: "center",
                      opacity: "0.8",
                    }}
                  >
                    <Card.Text className="pt-2">{timeConverter(elem.dt)[2]}</Card.Text>
                    <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`} />
                    <Card.Body>
                      <Card.Text>{` ${elem.weather[0].main}`}</Card.Text>
                      <Card.Text>{`Temp: ${(elem.main.temp - 273.15).toFixed(1)}°`}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
          )}
        </Row>
      )}
    </>
  );
};
export default Forecasts;
