import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../1779940.png";

const Home = (props) => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  return (
    <div id="HomeContainer">
      <Container fluid>
        <div id="logoWeather" className="d-flex justify-content-center pt-5">
          <img src={Logo} alt="img" />
        </div>
        <h1 className="mt-5 display-1 text-center">Weather Forecasts</h1>
        <form
          className="d-flex flex-column align-items-center"
          onSubmit={() => {
            navigate(`Details/${city}`);
          }}
        >
          <input
            className="w-75 rounded shadow"
            placeholder="Search City"
            type="text"
            style={{
              border: "1px solid blue",
              backgroundColor: "transparent",
              color: "blue",
              outline: "none",
              height: "40px",
            }}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button className="btn btn-primary mt-3 w-75">Search</button>
        </form>
      </Container>
    </div>
  );
};
export default Home;
