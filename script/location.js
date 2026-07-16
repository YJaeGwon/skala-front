// 실시간 현재 위치 정보 표시 (새로고침 버튼으로 재조회 가능)
var locationBox = document.getElementById("location-box");

function refreshLocation() {
  if (!navigator.geolocation) {
    locationBox.innerHTML = "<p>이 브라우저는 위치 정보를 지원하지 않습니다.</p>";
    return;
  }

  locationBox.innerHTML = "<p>위치 정보를 불러오는 중...</p>";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      var lat = position.coords.latitude.toFixed(4);
      var lon = position.coords.longitude.toFixed(4);
      locationBox.innerHTML = "<p>위도: " + lat + ", 경도: " + lon + "</p>";
    },
    (error) => {
      var message = "위치 정보를 가져올 수 없습니다.";
      if (error.code === error.PERMISSION_DENIED) {
        message = "위치 정보 권한이 거부되었습니다.";
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        message = "위치 정보를 사용할 수 없습니다. (OS의 위치 서비스 설정을 확인해주세요)";
      } else if (error.code === error.TIMEOUT) {
        message = "위치 정보를 가져오는 데 시간이 너무 오래 걸립니다.";
      }
      console.error("Geolocation error:", error);
      locationBox.innerHTML = "<p>" + message + "</p>";
    },
    { timeout: 10000 }
  );
}

refreshLocation();
