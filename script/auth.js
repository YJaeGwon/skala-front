// 간단한 로그인 기능 (서버/실제 인증 없음, localStorage를 계정 저장소처럼 사용)
// 로그인 여부와 관계없이 페이지의 모든 기능은 동일하게 동작합니다.

// ---- 상단 로그인 상태 표시 (index.html의 #auth-area) ----
var authArea = document.getElementById("auth-area");

function renderAuth() {
  if (!authArea) return;

  var name = localStorage.getItem("loginName");

  if (name) {
    authArea.innerHTML =
      '<span class="welcome-message">' + name + "님 환영합니다! 👋</span> " +
      '<button class="play-btn" onclick="logout()">로그아웃</button>';
  } else {
    authArea.innerHTML = '<a class="play-btn" href="login.html">로그인</a>';
  }
}

function logout() {
  localStorage.removeItem("loginName");
  renderAuth();
}

renderAuth();

// ---- 회원가입 페이지: 입력한 아이디/비밀번호/이름을 계정 목록에 저장 (signUp.html) ----
var signupForm = document.getElementById("signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", function () {
    var userId = document.getElementById("userId").value;
    var userPw = document.getElementById("userPw").value;
    var userName = document.getElementById("userName").value;

    var users = JSON.parse(localStorage.getItem("users") || "[]");
    users = users.filter(function (user) {
      return user.userId !== userId; // 같은 아이디로 다시 가입하면 최신 정보로 교체
    });
    users.push({ userId: userId, userPw: userPw, userName: userName });
    localStorage.setItem("users", JSON.stringify(users));
    // preventDefault를 호출하지 않아 signUpResult.html로 정상 이동합니다.
  });
}

// ---- 로그인 페이지: 저장된 계정 목록과 아이디/비밀번호 대조 (login.html) ----
var loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var id = document.getElementById("loginId").value;
    var pw = document.getElementById("loginPw").value;
    var users = JSON.parse(localStorage.getItem("users") || "[]");

    var matched = users.find(function (user) {
      return user.userId === id && user.userPw === pw;
    });

    var errorBox = document.getElementById("login-error");

    if (matched) {
      localStorage.setItem("loginName", matched.userName || matched.userId);
      window.location.href = "index.html";
    } else {
      errorBox.textContent = "아이디 또는 비밀번호가 올바르지 않습니다. (회원가입을 먼저 해주세요)";
    }
  });
}
