// 현재 시간 실시간 표시
var currentTimeEl = document.getElementById("current-time");

function updateClock() {
  var now = new Date();
  var hh = String(now.getHours()).padStart(2, "0");
  var mm = String(now.getMinutes()).padStart(2, "0");
  var ss = String(now.getSeconds()).padStart(2, "0");
  currentTimeEl.textContent = "🕐 현재 시간: " + hh + ":" + mm + ":" + ss;
}

updateClock();
setInterval(updateClock, 1000);
