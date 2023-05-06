"use strict";
// container
const containerApp = document.querySelector(".container .app");
const containerWeather = document.querySelector(".weather-box");
const containerDetail = document.querySelector(".weather-detail");
const containerError404 = document.querySelector(".not-found");
// element
const inputSearch = document.querySelector(".search-box__input");

// button
const btnSearch = document.querySelector(".search-box__btn");
// API Keys
const apiKeys = "cef6bfc4d64c3a8d9f6afcc10e72ae43";

// fetching from API//
// ================//
const fetchingClick = btnSearch.addEventListener("click", () => {
  const city = document.querySelector(".search-box__input").value;
  console.log(`clicked, city name:${city}`);

  if (city === "") return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKeys}`)
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        containerWeather.style.display = "none";
        containerDetail.style.display = "none";
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

// press Enter key to search value of input search
const keyDown = window.addEventListener("keydown", (e) => {
  const city = document.querySelector(".search-box__input").value;
  if (e.key !== "Enter" || city === "") return;
  else {
    console.log(`Enter pressed, city name:${city}`);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKeys}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.cod === "404") {
          containerWeather.style.display = "none";
          containerDetail.style.display = "none";
          containerError404.classList.add(".fade-in");
          containerError404.style.display = "flex";
          document.querySelector(".not-found .not-found__message ").innerHTML = "City not found, please try again";
          return;
        }
        containerError404.style.display = "none";
        containerError404.classList.remove(".fade-in");
        console.log(json);
      });
  }
});
