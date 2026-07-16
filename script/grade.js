// 3과목 성적 계산기
function checkGrade() {
  var subjects = ["HTML", "CSS", "JavaScript"];
  var total = 0;

  for (var i = 0; i < subjects.length; i++) {
    var score = Number(prompt(subjects[i] + " 점수를 입력하세요."));
    total += score;
  }

  var average = total / subjects.length;
  var result = average >= 60 ? "합격" : "불합격"; // 평균 60점 기준 합/불합 판정

  alert("총점: " + total + "점, 평균: " + average + ", 결과: " + result + "입니다!");
}
