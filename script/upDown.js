// 업다운 숫자 맞추기 게임 (DOM 버전)
var computerNum = Math.floor(Math.random() * 50) + 1; // 1~50 난수 생성
var tries = 0;

var updownMessage = document.getElementById("updown-message");
var updownInput = document.getElementById("updown-input");

function checkGuess() {
  var guess = Number(updownInput.value);

  if (updownInput.value === "" || guess < 1 || guess > 50) {
    updownMessage.textContent = "1~50 사이의 숫자를 입력해주세요.";
    return;
  }

  tries++;

  if (guess > computerNum) {
    updownMessage.textContent = "⬇️ Down! 더 작은 숫자를 입력해보세요.";
  } else if (guess < computerNum) {
    updownMessage.textContent = "⬆️ Up! 더 큰 숫자를 입력해보세요.";
  } else {
    updownMessage.textContent = "🎉 축하합니다! " + tries + "번 만에 맞추셨습니다.";
  }

  updownInput.value = "";
}

function resetGame() {
  computerNum = Math.floor(Math.random() * 50) + 1;
  tries = 0;
  updownMessage.textContent = "1~50 사이의 숫자를 맞혀보세요!";
  updownInput.value = "";
}
