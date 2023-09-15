import { Col, Container, Row } from "react-bootstrap";

const CurrentWeather = (props) => {
  return (
    <>
      <div id="main">
        <img
          src={`https://openweathermap.org/img/wn/${props.currentWeather.weather[0].icon}@2x.png`}
          alt="icon"
          id="icona"
        />
        <p className="text-center ">{`${(props.currentWeather.main.temp - 273.15).toFixed(1)}°`}</p>
      </div>
      <Row className="justify-content-center g-2 ">
        <Col
          xs={4}
          md={3}
          lg={2}
          className="border rounded "
          style={{ backgroundColor: "#cdcdcdba", borderColor: "#cdcdcdba" }}
        >
          <div className="d-flex flex-column align-items-center justify-content-center">
            <i className="bi bi-wind"></i>
            <p className="mb-0"> {props.currentWeather.wind.speed}</p>
            <p className="mb-0">wind speed</p>
          </div>
        </Col>
        <Col
          xs={4}
          md={3}
          lg={2}
          className="border rounded "
          style={{ backgroundColor: "#cdcdcdba", borderColor: "#cdcdcdba" }}
        >
          <div className="d-flex flex-column align-items-center justify-content-center">
            <i className="bi bi-clouds-fill"></i>
            <p className="mb-0"> {`${props.currentWeather.clouds.all}%`}</p>
            <p className="mb-0">clouds</p>
          </div>
        </Col>
        <Col
          xs={4}
          md={3}
          lg={2}
          className="border rounded "
          style={{ backgroundColor: "#cdcdcdba", borderColor: "#cdcdcdba" }}
        >
          <div className="d-flex flex-column align-items-center justify-content-center">
            <i className="bi bi-droplet-fill"></i>
            <p className="mb-0"> {`${props.currentWeather.main.humidity}%`}</p>
            <p className="mb-0">humidity</p>
          </div>
        </Col>
      </Row>
      <hr style={{ color: "#2b2828" }} />
    </>
  );
};
export default CurrentWeather;
