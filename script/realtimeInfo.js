// 화면(DOM) 처리 담당 모듈
import { fetchWeather } from "./weatherAPI.js";

const citySelect = document.getElementById("city-select");
const weatherBox = document.getElementById("weather-box");

citySelect.addEventListener("change", async () => {
  // 1) 선택된 도시의 위도/경도를 select의 value에서 꺼내기 (예: "37.56,126.97")

  // 2) weatherBox에 "로딩 중..." 메시지를 우선 표시 (innerHTML)

  // 3) fetchWeather()를 호출해 날씨 데이터를 받아온 뒤 innerHTML로 화면에 그리기
});
