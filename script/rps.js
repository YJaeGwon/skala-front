// 가위바위보 게임 (DOM 버전)
function playRockPaperScissors(userChoice) {
  var choices = ["가위", "바위", "보"];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  var result;

  if (userChoice === computerChoice) {
    result = "🤝 비겼습니다!";
  } else if (
    (userChoice === "가위" && computerChoice === "보") ||
    (userChoice === "바위" && computerChoice === "가위") ||
    (userChoice === "보" && computerChoice === "바위")
  ) {
    result = "🎉 이겼습니다!";
  } else {
    result = "😢 졌습니다.";
  }

  var rpsResult = document.getElementById("rps-result");
  rpsResult.textContent = "나: " + userChoice + " / 컴퓨터: " + computerChoice + " → " + result;
}
