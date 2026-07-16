// Open-Meteo API 호출 담당 모듈
export async function fetchWeather(lat, lon) {
  var url =
    "https://api.open-meteo.com/v1/forecast?latitude=" + lat +
    "&longitude=" + lon +
    "&current=temperature_2m,relative_humidity_2m,wind_speed_10m";

  var response = await fetch(url);
  var data = await response.json();

  return data.current; // { temperature_2m, relative_humidity_2m, wind_speed_10m, ... }
}
