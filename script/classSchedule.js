// 주차별 요일(월~금) 시간표 데이터
const weeklySchedule = {
  1: ["-", "-", "HTML, CSS, JavaScript", "HTML, CSS, JavaScript", "휴강(대체휴일)"],
  2: ["Python 데이터 분석 이해", "Python 데이터 분석 이해", "스마트 데이터 이해 및 활용", "스마트 데이터 이해 및 활용", "스마트 데이터 이해 및 활용"],
  3: ["데이터 분석 개요 및 기초통계", "데이터 분석 개요 및 기초통계", "Prompt 설계와 Context", "LLM과 Transformer 아키텍처", "LLM과 Transformer 아키텍처"],
  4: ["Java, SpringBoot, REST API 구현", "Java, SpringBoot, REST API 구현", "Java, SpringBoot, REST API 구현", "Java, SpringBoot, REST API 구현", "Java, SpringBoot, REST API 구현"],
  5: ["Agile 방법론 및 MSA 개발", "Agile 방법론 및 MSA 개발", "sLLM 구현 및 Fine Tuning", "sLLM 구현 및 Fine Tuning", "실전 Feature Engineering"],
  6: ["휴강(광복절)", "Front-framework: Vue.js", "Front-framework: Vue.js", "Front-framework: Vue.js", "Front-framework: Vue.js"],
  7: ["컨테이너 이해 및 컨테이너화", "컨테이너 이해 및 컨테이너화", "쿠버네티스 이해 및 배포", "쿠버네티스 이해 및 배포", "특강(취업특강)"],
  8: ["Spring AI", "Spring AI", "웹 서비스 개발 mini-Project", "웹 서비스 개발 mini-Project", "웹 서비스 개발 mini-Project"],
  9: ["메시지큐 및 데이터 이해", "메시지큐 및 데이터 이해", "메시지큐 및 데이터 이해", "모델 개발 및 최적화", "모델 개발 및 최적화"],
  10: ["컨테이너 실무 심화", "컨테이너 실무 심화", "컨테이너 실무 심화", "특강(도메인특강)", "생성형 AI 서비스 개발(LangChain)"],
  11: ["생성형 AI 서비스 개발(LangChain)", "생성형 AI 서비스 개발(LangChain)", "휴강(자체휴강)", "휴강(창설연휴)", "휴강(창설연휴)"],
  12: ["RAG Pipeline 설계 및 구축", "RAG Pipeline 설계 및 구축", "RAG Pipeline 설계 및 구축", "데이터 분석 mini-Project", "데이터 분석 mini-Project"],
  13: ["휴강(대체휴일·개천절)", "모델 서빙 및 AIOps 구성", "모델 서빙 및 AIOps 구성", "모델 서빙 및 AIOps 구성", "휴강(한글날)"],
  14: ["AI Agent 설계 및 구축", "AI Agent 설계 및 구축", "Vector DB", "AI Agent Capstone", "AI Agent Capstone"],
  15: ["AI Agent Capstone", "AI 서비스 개발 Mini-project", "AI 서비스 개발 Mini-project", "AI 서비스 개발 Mini-project", "DevOps 이해 및 활용"],
  16: ["DevOps 이해 및 활용", "AI 프로젝트 방법론", "팀프로젝트", "팀프로젝트", "팀프로젝트"],
  17: ["팀프로젝트", "팀프로젝트", "팀프로젝트", "팀프로젝트", "팀프로젝트"],
  18: ["팀프로젝트", "팀프로젝트", "팀프로젝트", "팀프로젝트 (중간점검)", "팀프로젝트"],
  19: ["팀프로젝트", "팀프로젝트", "팀프로젝트", "팀프로젝트", "팀프로젝트"],
  20: ["팀프로젝트", "팀프로젝트", "팀프로젝트", "팀프로젝트", "팀프로젝트"],
  21: ["팀프로젝트", "팀프로젝트", "팀프로젝트", "팀프로젝트", "팀프로젝트"],
  22: ["팀프로젝트", "팀프로젝트", "팀프로젝트", "최종발표(예선)", "최종발표(본선)·수료식"]
};

const weekDetail = document.getElementById("week-detail");
const weekDetailTitle = document.getElementById("week-detail-title");
const weekDetailBody = document.getElementById("week-detail-body");

let currentWeek = null;

function showWeekDetail(week) {
  if (currentWeek === week) {
    // 같은 주차를 다시 클릭하면 접기
    weekDetail.hidden = true;
    currentWeek = null;
    return;
  }

  var days = weeklySchedule[week]; // [월, 화, 수, 목, 금]
  weekDetailTitle.textContent = week + "주차 요일별 시간표";

  // 오전(09~12시)과 오후(14~18시)는 하루 종일 같은 내용이라 각 행에 그대로 채우고,
  // 그 사이 점심시간(12~13시)은 요일 5칸을 colspan으로 합침
  var dayCells = days.map((day) => "<td>" + day + "</td>").join("");
  var morningRow = "<tr><td>09:00~12:00</td>" + dayCells + "</tr>";
  var lunchRow = '<tr><td>12:00~13:00</td><td colspan="5">🍱 점심시간</td></tr>';
  var afternoonRow = "<tr><td>14:00~18:00</td>" + dayCells + "</tr>";

  weekDetailBody.innerHTML = morningRow + lunchRow + afternoonRow;

  weekDetail.hidden = false;
  currentWeek = week;
  weekDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
