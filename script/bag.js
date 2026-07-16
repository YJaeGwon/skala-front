// 내 가방 보기
function showMyBag() {
  var myBag = {
    지갑: 1,
    노트북: 1,
    우산: 1,
    이어폰: 2
  };

  var message = "🎒 내 가방 속 물건\n";
  for (var item in myBag) {
    message += item + ": " + myBag[item] + "개\n";
  }

  alert(message);
}
