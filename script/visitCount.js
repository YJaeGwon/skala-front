// 로컬 방문 횟수 (이 브라우저 기준, localStorage에 저장 - 실제 전체 방문자 수는 아님)
var visitCountEl = document.getElementById("visit-count");
var count = Number(localStorage.getItem("visitCount")) || 0;
count += 1;
localStorage.setItem("visitCount", count);

visitCountEl.textContent = "🔢 이 브라우저에서 " + count + "번째 방문이에요!";
