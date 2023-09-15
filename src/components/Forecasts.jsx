import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Forecasts = (props) => {
  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    setForecast(props.nextDaysWeather.list);
  }, []);
  return (
    <>
      {console.log(forecast)}
      <h4>5-days Forecast</h4>
      <Row className="justify-content-center mt-5 gy-4">
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className="shadow"
            style={{
              backgroundColor: "#7a7cce",
            }}
          >
            <Card.Text>Day</Card.Text>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>max temp</Card.Text>
              <Card.Text>min temp</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className="shadow"
            style={{
              backgroundColor: "#7a7cce",
            }}
          >
            <Card.Text>Day</Card.Text>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>max temp</Card.Text>
              <Card.Text>min temp</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className="shadow"
            style={{
              backgroundColor: "#7a7cce",
            }}
          >
            <Card.Text>Day</Card.Text>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>max temp</Card.Text>
              <Card.Text>min temp</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className="shadow"
            style={{
              backgroundColor: "#7a7cce",
            }}
          >
            <Card.Text>Day</Card.Text>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>max temp</Card.Text>
              <Card.Text>min temp</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className="shadow"
            style={{
              backgroundColor: "#7a7cce",
            }}
          >
            <Card.Text>Day</Card.Text>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>max temp</Card.Text>
              <Card.Text>min temp</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Forecasts;
