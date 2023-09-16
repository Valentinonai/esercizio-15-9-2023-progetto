import { Col, Row } from "react-bootstrap";

const AirConditions = (props) => {
  return (
    <div className="mt-5 shadow p-4 airCondition">
      <h5 className="mb-4 ps-2 ps-md-5" style={{ display: "block", fontWeight: "300", fontSize: "30px" }}>
        {props.currentWeather.weather[0].description.toUpperCase()}
      </h5>
      <Row className="justify-content-start g-5 ">
        <Col xs={6} md={6} lg={5} className=" ">
          <div className="d-flex flex-column ps-2 ps-md-5">
            <div>
              <i className="bi bi-wind"></i>
              <span className="mb-0 ms-3">Wind Speed</span>
            </div>
            <p className="mb-0"> {props.currentWeather.wind.speed}</p>
          </div>
        </Col>
        <Col xs={6} md={6} lg={5} className=" ">
          <div className="d-flex flex-column ps-2 ps-md-5">
            <div>
              <i className="bi bi-clouds-fill"></i>
              <span className="mb-0 ms-3">Clouds</span>
            </div>
            <p className="mb-0"> {`${props.currentWeather.clouds.all}%`}</p>
          </div>
        </Col>
        <Col xs={6} md={6} lg={5} className=" ">
          <div className="d-flex flex-column ps-2 ps-md-5">
            <div>
              <i className="bi bi-droplet-fill"></i>
              <span className="mb-0 ms-3">Humidity</span>
            </div>
            <p className="mb-0"> {`${props.currentWeather.main.humidity}%`}</p>
          </div>
        </Col>
        <Col xs={6} md={6} lg={5} className=" ">
          <div className="d-flex flex-column ps-2 ps-md-5">
            <div>
              <i class="bi bi-thermometer-half"></i>
              <span className="mb-0 ms-3">Real Feel</span>
            </div>
            <p className="mb-0"> {`${(props.currentWeather.main.feels_like - 273.15).toFixed(1)}°`}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default AirConditions;
