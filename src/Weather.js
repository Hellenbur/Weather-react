import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  function handleResponce(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}° C`
    );
  }
  let apiKey = "1eb56e446c1e2ae50024bef80961c768";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponce);
  let weatherData = {
    city: "Kharkiv",
    temperature: 6,
    date: "Tuesday 10.00",
    description: "Rain",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/48/rain.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control shadow-sm"
                id="inputCity"
                placeHolder="Enter your city..."
                autoFocus="on"
                autoComplete="off"
              />
              <button
                className="btn btn-success shadow"
                id="searchButton"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
          <table className="table table-borderless">
            <thead>
              <th>
                <h1>{weatherData.city}</h1>
              </th>
              <th scope="col">
                <span className="Temperature"> </span>
                <span className="tempUnits">
                  {weatherData.temperature}°<a href="/">C</a> |{" "}
                  <a href="/">F</a>
                </span>
              </th>
            </thead>
            <tr>
              <td>
                <h2>{weatherData.date}</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Humidity: {weatherData.humidity}%</h4>
              </td>
              <td>
                <h4>
                  <img src={weatherData.imgUrl} alt={weatherData.description} />
                </h4>
              </td>
            </tr>

            <tr>
              <td>
                <h4>Wind: {weatherData.wind} km/h</h4>
              </td>
              <td>
                <h4>{weatherData.description}</h4>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <h5>
        Was coded by <a href="mailto:elen.burma@gmail.com">Olena Burma</a> and
        is
        <a
          href="https://github.com/Hellenbur/weather-react"
          rel="noreferrer"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
        and
        <a
          href="https://neon-cajeta-4c91b3.netlify.app"
          rel="noreferrer"
          target="_blank"
        >
          hosted on Netlify
        </a>
      </h5>
    </div>
  );
}
