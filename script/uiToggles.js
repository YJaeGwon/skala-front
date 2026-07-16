// 섹션 접기/펼치기
function toggleGameArea() {
  var content = document.getElementById("game-content");
  var btn = document.getElementById("game-toggle");

  content.hidden = !content.hidden;
  btn.textContent = content.hidden ? "▶ 펼치기" : "▼ 접기";
}
