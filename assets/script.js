var weather = document.getElementById("currentDay");
var forecast = document.getElementById("nextFiveDays");
var fetchButton = document.getElementById("fetch-button");

var APIKey = "7e7f8c0a0a9fe0018e1374b0f7056f6a";
var city;

function getWeather() {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {});
}
