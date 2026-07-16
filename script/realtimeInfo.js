// 화면(DOM) 처리 담당 모듈
import { fetchWeather } from "./weatherAPI.js";

const citySelect = document.getElementById("city-select");
const weatherBox = document.getElementById("weather-box");

citySelect.addEventListener("change", async () => {
  var value = citySelect.value;

  if (value === "none") {
    weatherBox.innerHTML = "<p>도시를 선택하면 정보가 표시됩니다.</p>";
    return;
  }

  var [lat, lon] = value.split(","); // option value="위도,경도" 형태를 분리
  var cityName = citySelect.options[citySelect.selectedIndex].text;

  weatherBox.innerHTML = "<p>" + cityName + " 날씨를 불러오는 중...</p>";

  try {
    var weather = await fetchWeather(lat, lon);
    weatherBox.innerHTML =
      "<p>" + cityName + "</p>" +
      "<p>현재 기온: " + weather.temperature + "°C</p>" +
      "<p>풍속: " + weather.windspeed + "m/s</p>";
  } catch (error) {
    weatherBox.innerHTML = "<p>날씨 정보를 불러오지 못했습니다.</p>";
  }
});
