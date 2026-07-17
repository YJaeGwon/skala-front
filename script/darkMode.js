// 다크모드 토글 (설정은 localStorage에 저장되어 모든 페이지에 유지됨)
function toggleDarkMode() {
  var current = document.documentElement.dataset.theme;
  var next = current === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
  updateThemeToggleLabel();
}

function updateThemeToggleLabel() {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;
  btn.textContent =
    document.documentElement.dataset.theme === "dark" ? "☀️ 라이트모드" : "🌙 다크모드";
}

document.addEventListener("DOMContentLoaded", updateThemeToggleLabel);
