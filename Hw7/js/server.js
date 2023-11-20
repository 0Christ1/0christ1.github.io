let theCity;

const clearButton = document.querySelector("#clear");
const cityInput = document.querySelector("#city");
const stateInput = document.querySelector("#state");
clearButton.addEventListener("click", () => {
  cityInput.value = "";
  stateInput.value = "";
});

const theButton = document
  .querySelector("#check")
  .addEventListener("click", async () => {
    const city = document.querySelector("#city").value;
    const state = document.querySelector("#state").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},us&appid=eca5940af206314b7aa14293b7ddef18`;
    const response = await fetch(url);
    const data = await response.json();
    theCity = data;
    console.log(data);
    document.querySelector("#cityName").innerHTML = data.name;
    document.querySelector("#cityTemp").innerHTML = data.main.temp;
    document.querySelector("#cityHumidity").innerHTML = data.main.humidity;
    document.querySelector("#cityWindSpeed").innerHTML = data.wind.speed;
    document.querySelector("#cityWindDirection").innerHTML = data.wind.deg;
  });
