"use strict";
// container
const containerApp = document.querySelector(".container .app");
const containerWeather = document.querySelector("weather-box");
const containerDetail = document.querySelector(".weather-detail");
const containerError404 = document.querySelector(".not-found");
// element

// button
const btnSearch = document.querySelector(".search-box__btn");
// API Keys

// fetching from API//

const fetching = btnSearch.addEventListener("click", () => {
  const apiKeys = "cef6bfc4d64c3a8d9f6afcc10e72ae43";
  const city = document.querySelector(".search-box__input").value;
  console.log(`${city}`);
  if (city === "") return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKeys}`)
    .then((response) => response.json())
    .then((json) => {
      if (json.message === "city not found") {
        containerError404.classList.add(".fade-in");
        containerError404.style.display = "flex";
        document.querySelector(".not-found .not-found__message ").innerHTML = "City not found, please try again";
        return;
      }
      containerError404.style.display = "none";
      containerError404.classList.remove(".fade-in");
      console.log(json);
    });
});
