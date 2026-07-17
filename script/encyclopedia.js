// 백과사전 검색 (위키백과 REST API, fetch/async-await)
var wikiInput = document.getElementById("wiki-input");
var wikiResult = document.getElementById("wiki-result");

async function searchWiki() {
  var term = wikiInput.value.trim();

  if (!term) return;

  wikiResult.innerHTML = "<p>🔎 검색 중...</p>";

  try {
    var url = "https://ko.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(term);
    var response = await fetch(url);

    if (!response.ok) {
      wikiResult.innerHTML = "<p>'" + term + "'에 대한 문서를 찾을 수 없습니다.</p>";
      return;
    }

    var data = await response.json();

    wikiResult.innerHTML =
      "<h4>" + data.title + "</h4>" +
      (data.thumbnail
        ? '<img src="' + data.thumbnail.source + '" alt="' + data.title + '" class="wiki-thumb">'
        : "") +
      "<p>" + data.extract + "</p>" +
      '<p><a href="' + data.content_urls.desktop.page + '" target="_blank" rel="noopener">위키백과에서 더 보기 →</a></p>';
  } catch (error) {
    console.error("Wikipedia fetch error:", error);
    wikiResult.innerHTML = "<p>검색 중 오류가 발생했습니다.</p>";
  }
}

// 엔터 키로도 검색되도록
wikiInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchWiki();
  }
});
