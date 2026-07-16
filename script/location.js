// 실시간 현재 위치 정보 표시
const locationBox = document.getElementById("location-box");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      var lat = position.coords.latitude.toFixed(4);
      var lon = position.coords.longitude.toFixed(4);
      locationBox.innerHTML = "<p>위도: " + lat + ", 경도: " + lon + "</p>";
    },
    () => {
      locationBox.innerHTML = "<p>위치 정보를 가져올 수 없습니다. (권한을 허용했는지 확인해주세요)</p>";
    }
  );
} else {
  locationBox.innerHTML = "<p>이 브라우저는 위치 정보를 지원하지 않습니다.</p>";
}
