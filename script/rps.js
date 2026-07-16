// 가위바위보 게임
function playRockPaperScissors() {
  var choices = ["가위", "바위", "보"];
  var userChoice = prompt("가위, 바위, 보 중 하나를 입력하세요!");

  if (!choices.includes(userChoice)) {
    alert("가위, 바위, 보 중에서만 입력해주세요.");
    return;
  }

  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  var result;

  if (userChoice === computerChoice) {
    result = "비겼습니다!";
  } else if (
    (userChoice === "가위" && computerChoice === "보") ||
    (userChoice === "바위" && computerChoice === "가위") ||
    (userChoice === "보" && computerChoice === "바위")
  ) {
    result = "이겼습니다! 🎉";
  } else {
    result = "졌습니다 😢";
  }

  alert("나: " + userChoice + " / 컴퓨터: " + computerChoice + "\n" + result);
}
