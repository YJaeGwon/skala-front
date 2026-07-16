// 업다운 숫자 맞추기 게임
function startGame() {
  var computerNum = Math.floor(Math.random() * 50) + 1; // 1~50 난수 생성
  var tries = 0;

  while (true) {
    var input = prompt("1~50 사이의 숫자를 맞혀보세요!");
    if (input === null) return; // 취소 시 게임 종료

    var guess = Number(input);
    tries++;

    if (guess > computerNum) {
      alert("Down!");
    } else if (guess < computerNum) {
      alert("Up!");
    } else {
      alert("축하합니다! " + tries + "번 만에 맞추셨습니다.");
      break;
    }
  }
}
