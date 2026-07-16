// 글자 크기 조절 (localStorage에 저장되어 모든 페이지에 유지됨, 기본값 100%)
var FONT_SCALE_MIN = 0.8;
var FONT_SCALE_MAX = 1.4;
var FONT_SCALE_STEP = 0.1;

var fontSizeLabel = document.getElementById("font-size-label");

function applyFontScale(scale) {
  document.documentElement.style.fontSize = scale * 100 + "%";
  if (fontSizeLabel) {
    fontSizeLabel.textContent = Math.round(scale * 100) + "%";
  }
}

function increaseFontSize() {
  var scale = Number(localStorage.getItem("fontScale")) || 1;
  scale = Math.min(FONT_SCALE_MAX, +(scale + FONT_SCALE_STEP).toFixed(2));
  localStorage.setItem("fontScale", scale);
  applyFontScale(scale);
}

function decreaseFontSize() {
  var scale = Number(localStorage.getItem("fontScale")) || 1;
  scale = Math.max(FONT_SCALE_MIN, +(scale - FONT_SCALE_STEP).toFixed(2));
  localStorage.setItem("fontScale", scale);
  applyFontScale(scale);
}

// 페이지를 열었을 때 라벨을 현재 저장된 값으로 맞춰둠
applyFontScale(Number(localStorage.getItem("fontScale")) || 1);
