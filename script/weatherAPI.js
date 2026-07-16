// Open-Meteo API 호출 담당 모듈
export async function fetchWeather(lat, lon) {
  var url =
    "https://api.open-meteo.com/v1/forecast?latitude=" + lat +
    "&longitude=" + lon + "&current_weather=true";

  var response = await fetch(url);
  var data = await response.json();

  return data.current_weather; // { temperature, windspeed, ... }
}
