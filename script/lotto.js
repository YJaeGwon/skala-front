// 로또 번호 생성기 (1~45 중 중복 없이 6개)
function generateLotto() {
  var numbers = [];

  while (numbers.length < 6) {
    var num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }

  numbers.sort((a, b) => a - b);

  var lottoResult = document.getElementById("lotto-result");
  lottoResult.innerHTML = numbers
    .map((num) => '<span class="' + lottoBallClass(num) + '">' + num + "</span>")
    .join("");
}

// 실제 로또 공처럼 번호대별로 색을 다르게 표시
function lottoBallClass(num) {
  if (num <= 10) return "lotto-ball lotto-yellow";
  if (num <= 20) return "lotto-ball lotto-blue";
  if (num <= 30) return "lotto-ball lotto-red";
  if (num <= 40) return "lotto-ball lotto-gray";
  return "lotto-ball lotto-green";
}
