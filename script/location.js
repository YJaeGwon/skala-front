// 실시간 현재 위치 정보 표시 (새로고침 버튼으로 재조회 가능)
var locationBox = document.getElementById("location-box");

function refreshLocation() {
  // TODO: 기기/브라우저 위치 서비스 문제로 임시로 대한민국 고정 표시 중.
  // 나중에 해결되면 아래 return 두 줄만 지우면 실제 geolocation 코드가 다시 동작함.
  locationBox.innerHTML = "<p>🇰🇷 대한민국</p>";
  return;

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
