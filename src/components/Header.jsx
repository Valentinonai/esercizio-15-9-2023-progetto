import { useEffect, useState } from "react";

const Header = (props) => {
  const [data, setData] = useState(null);

  const timeConverter = () => {
    let a = new Date((props.currentWeather.dt + props.currentWeather.timezone - 7200) * 1000);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    props.setToday(date);
    props.setTimeZone(props.currentWeather.timezone);
    setData(time);
  };

  useEffect(() => {
    if (props.currentWeather) timeConverter();
  }, [props.currentWeather]);
  return (
    <>
      <h1 className="pt-5 text-center">
        <i
          className="bi bi-geo-alt-fill"
          style={{
            fontSize: "25px",
          }}
        ></i>
        {props.currentWeather.name}
      </h1>
      <p className="text-center">{data}</p>
    </>
  );
};
export default Header;
