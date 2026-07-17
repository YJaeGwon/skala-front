// 사진 클릭 시 크게 보여주는 라이트박스 (배경 클릭 또는 Esc로 닫기)
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add("is-open");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeLightbox();
});
