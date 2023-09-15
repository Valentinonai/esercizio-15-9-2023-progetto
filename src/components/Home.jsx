import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <h1>Meteo</h1>
      <form
        onSubmit={() => {
          navigate(`Details/${city}`);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button className="btn btn-primary">click</button>
      </form>
    </>
  );
};
export default Home;
