// 3과목 성적 계산기 (DOM 버전)
var subjects = ["HTML", "CSS", "JavaScript"];
var subjectIndex = 0;
var total = 0;

var gradeLabel = document.getElementById("grade-subject-label");
var gradeInput = document.getElementById("grade-input");
var gradeResult = document.getElementById("grade-result");

function submitScore() {
  var score = Number(gradeInput.value);

  if (gradeInput.value === "" || score < 0 || score > 100) {
    gradeResult.textContent = "0~100 사이의 점수를 입력해주세요.";
    return;
  }

  total += score;
  subjectIndex++;
  gradeInput.value = "";
  gradeResult.textContent = "";

  if (subjectIndex < subjects.length) {
    gradeLabel.textContent = subjects[subjectIndex] + " 점수를 입력하세요.";
  } else {
    var average = total / subjects.length;
    var result = average >= 60 ? "합격" : "불합격"; // 평균 60점 기준 합/불합 판정

    gradeLabel.textContent = "모든 과목 입력 완료!";
    gradeResult.textContent =
      "총점: " + total + "점, 평균: " + average.toFixed(1) + ", 결과: " + result + "입니다!";
    gradeInput.disabled = true;
  }
}

function resetGrade() {
  subjectIndex = 0;
  total = 0;
  gradeInput.disabled = false;
  gradeInput.value = "";
  gradeResult.textContent = "";
  gradeLabel.textContent = subjects[0] + " 점수를 입력하세요.";
}
