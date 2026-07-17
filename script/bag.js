// 내 가방 보기 (물건 담기/빼기)
var myBag = {
  지갑: 1,
  노트북: 1,
  우산: 1
};

var bagItemInput = document.getElementById("bag-item-input");
var bagQtyInput = document.getElementById("bag-qty-input");
var bagList = document.getElementById("bag-list");

function renderBag() {
  var html = "";
  for (var item in myBag) {
    html +=
      "<li>" + item + ": " + myBag[item] + "개 " +
      "<button class=\"bag-remove-btn\" onclick=\"removeFromBag('" + item + "')\">빼기</button></li>";
  }
  bagList.innerHTML = html || "<li>가방이 비어있어요.</li>";
}

function addToBag() {
  var name = bagItemInput.value.trim();
  var qty = Number(bagQtyInput.value) || 1;

  if (!name) return;

  myBag[name] = (myBag[name] || 0) + qty;
  bagItemInput.value = "";
  bagQtyInput.value = 1;
  renderBag();
}

function removeFromBag(name) {
  if (!myBag[name]) return;

  myBag[name] -= 1;
  if (myBag[name] <= 0) {
    delete myBag[name];
  }
  renderBag();
}

renderBag();
