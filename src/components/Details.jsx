import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const params = useParams();
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [currenWeahter, setCurrentWeather] = useState(null);
  const [nextDaysWeahter, setNextDaysWeather] = useState(null);

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
  return;
};
export default Details;