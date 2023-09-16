import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import Forecasts from "./Forecasts";
import { Col, Container, Row } from "react-bootstrap";
import DayForecast from "./DayForecast";
import AirConditions from "./AirConditions";

const Details = (props) => {
  const params = useParams();
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [nextDaysWeather, setNextDaysWeather] = useState(null);
  const [today, setToday] = useState("");
  const [timeZone, setTimeZone] = useState("");

  const fetchCurrentWeather = async () => {
    try {
      const risp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b4dcdd1c3d41aed50311b78b29595028`
      );
      if (risp.ok) {
        const data = await risp.json();
        setCurrentWeather(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNextDays = async () => {
    try {
      const risp = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=b4dcdd1c3d41aed50311b78b29595028`
      );
      if (risp.ok) {
        const data = await risp.json();
        setNextDaysWeather(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchLocation = async () => {
    try {
      const risp = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${params.city}&appid=b4dcdd1c3d41aed50311b78b29595028`
      );
      if (risp.ok) {
        const data = await risp.json();
        setLat(data[0].lat);
        setLong(data[0].lon);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (lat && long) {
      fetchCurrentWeather();
      fetchNextDays();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);
  return (
    <div id="Details">
      {currentWeather && (
        <Container fluid="xxl">
          <Row>
            <Col xs={12} lg={7}>
              <Row>
                <Col xs={12}>
                  <Row className="mb-5">
                    <Col xs={5} xl={4}>
                      <Header currentWeather={currentWeather} setToday={setToday} setTimeZone={setTimeZone} />
                    </Col>
                    <Col xs={7} xl={8}>
                      <CurrentWeather currentWeather={currentWeather} nextDaysWeather={nextDaysWeather} today={today} />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12}>
                  <DayForecast nextDaysWeather={nextDaysWeather} today={today} currentWeather={currentWeather} />
                </Col>
                <Col xs={12}>
                  <AirConditions currentWeather={currentWeather} />
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={5}>
              <Forecasts
                nextDaysWeather={nextDaysWeather}
                today={today}
                timezone={timeZone}
                currentWeather={currentWeather}
              />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
export default Details;
