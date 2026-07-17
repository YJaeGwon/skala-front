// BMI 계산기 (아시아-태평양 기준)
function calculateBMI() {
  var height = Number(document.getElementById("bmi-height").value);
  var weight = Number(document.getElementById("bmi-weight").value);
  var bmiResult = document.getElementById("bmi-result");

  if (!height || !weight) {
    bmiResult.textContent = "키와 몸무게를 모두 입력해주세요.";
    return;
  }

  var heightM = height / 100;
  var bmi = weight / (heightM * heightM);
  var category;

  if (bmi < 18.5) {
    category = "저체중";
  } else if (bmi < 23) {
    category = "정상";
  } else if (bmi < 25) {
    category = "과체중";
  } else {
    category = "비만";
  }

  bmiResult.textContent = "BMI: " + bmi.toFixed(1) + " (" + category + ")";
}
