const DayForecast = (props) => {
  const timeConverter = (data, timezone) => {
    // console.log(data, timezone);
    let a = new Date((data + timezone - 7200) * 1000);
    const date = a.getDate();
    const hour = a.getHours();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    return [date, hour, `${date}-${month}-${year}`];
  };

  return (
    <>
      {props.nextDaysWeather && (
        <>
          <h5 className="mt-4" style={{ fontWeight: "300" }}>
            HOURLY FORECAST
          </h5>
          <div
            className="d-flex justify-content-start justify-content-xl-center align-items-start"
            style={{ overflowX: "scroll" }}
          >
            {props.nextDaysWeather.list.map(
              (elem, index) =>
                timeConverter(elem.dt, props.currentWeather.timezone)[0] === props.today && (
                  <div
                    key={`${index}`}
                    className="d-flex flex-column justify-content-center align-items-center hourWeather"
                  >
                    <span className="mt-3">{timeConverter(elem.dt, props.currentWeather.timezone)[1]}</span>
                    <img src={`https://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`} alt="icon" />
                    <span className="mb-3">{`${(elem.main.temp - 273.15).toFixed(1)}°`}</span>
                  </div>
                )
            )}
          </div>
        </>
      )}
    </>
  );
};
export default DayForecast;
