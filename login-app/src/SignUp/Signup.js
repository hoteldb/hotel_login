import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  // 입력 필드 상태 관리
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // 에러 메시지 상태
  const [errorMessage, setErrorMessage] = useState("");

  const handleNext = () => {
    // 입력값 유효성 검사
    if (!email.trim() || !username.trim() || !password.trim() || !confirmPassword.trim()) {
      setErrorMessage("모든 필드를 입력해주세요."); // 필드 누락 시 메시지
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다."); // 비밀번호 불일치 시 메시지
      return;
    }
    if (!isChecked) {
      setErrorMessage("약관에 동의해주세요."); // 약관 동의 누락 시 메시지
      return;
    }

    // 모든 조건이 충족되면 추천 화면으로 이동
    setErrorMessage(""); // 에러 메시지 초기화
    navigate("/recommend");
  };

  return (
    <div className="signup-container">
      <h1>회원 가입을 위해 정보를 입력해주세요</h1>
      <form className="signup-form">
        <label>* 이메일</label>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>* 이름</label>
        <input
          type="username"
          placeholder="이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>* 비밀번호</label>
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>* 비밀번호 확인</label>
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <div className="terms">
          <label>
            이용약관 개인정보 수집 및 이용, 마케팅 활용 선택에 모두 동의합니다.
          </label>
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
          </div>
        </div>

        {/* 에러 메시지 출력 */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="button" className="next-button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Signup;