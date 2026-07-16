// 여행 사진 슬라이더 - 이전/다음 버튼으로 한 장씩 이동
const track = document.getElementById("tripSliderTrack");
const slideCount = track.children.length;
let currentIndex = 0;

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = slideCount - 1; // 첫 장에서 이전 -> 마지막 장으로
  if (currentIndex >= slideCount) currentIndex = 0;     // 마지막 장에서 다음 -> 첫 장으로

  track.style.transform = "translateX(" + (-currentIndex * 100) + "%)";
}
