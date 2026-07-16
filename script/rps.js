// 가위바위보 게임 (DOM 버전, 연속 승리 기록 포함)
var rpsStreak = 0;
var rpsBestStreak = Number(localStorage.getItem("rpsBestStreak")) || 0; // 최고 기록은 브라우저에 저장돼 새로고침해도 유지됨

var rpsStreakEl = document.getElementById("rps-streak");

function playRockPaperScissors(userChoice) {
  var choices = ["가위", "바위", "보"];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  var result;

  if (userChoice === computerChoice) {
    result = "🤝 비겼습니다!";
    rpsStreak = 0;
  } else if (
    (userChoice === "가위" && computerChoice === "보") ||
    (userChoice === "바위" && computerChoice === "가위") ||
    (userChoice === "보" && computerChoice === "바위")
  ) {
    result = "🎉 이겼습니다!";
    rpsStreak++;
    if (rpsStreak > rpsBestStreak) {
      rpsBestStreak = rpsStreak;
      localStorage.setItem("rpsBestStreak", rpsBestStreak);
    }
  } else {
    result = "😢 졌습니다.";
    rpsStreak = 0;
  }

  var rpsResult = document.getElementById("rps-result");
  rpsResult.textContent = "나: " + userChoice + " / 컴퓨터: " + computerChoice + " → " + result;

  // 결과 문구가 이전과 같아도(예: 컴퓨터가 같은 걸 냄) 클릭이 반영됐다는 걸 보여주기 위한 깜빡임 효과
  rpsResult.classList.remove("result-flash");
  void rpsResult.offsetWidth; // 리플로우를 강제해서 애니메이션을 처음부터 다시 재생시킴
  rpsResult.classList.add("result-flash");

  renderRpsStreak();
}

function renderRpsStreak() {
  rpsStreakEl.textContent = "🔥 연속 승리: " + rpsStreak + "회 / 🏆 최고 기록: " + rpsBestStreak + "회";
}

renderRpsStreak();
