import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Recommend.css";

const Recommend = () => {
  const navigate = useNavigate();

  const hotelTypes = [
    "헬스장",
    "스파",
    "수영장",
    "재즈바",
    "업무 공간 제공",
    "스카이라운지",
    "루프탑",
    "뷔페",
    "금연구역",
    "테라스",
    "바다 전망",
    "키즈존",
    "반려동물 동반 가능",
    "무료 주차",
    "셔틀버스 제공",
  ];

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else if (selectedTypes.length < 5) {
      setSelectedTypes([...selectedTypes, type]);
    } else {
      alert("최대 5개까지 선택할 수 있습니다.");
    }
  };

  const handleSignUp = () => {
    if (selectedTypes.length === 0) {
      alert("최소 1개의 호텔 타입을 선택해주세요.");
      return;
    }
    setIsSubmitting(true); // 회원가입 완료 메시지 표시
    setTimeout(() => {
      navigate("/"); // 2초 후 로그인 화면으로 이동
    }, 2000);
  };

  return (
    <div className="recommend-body">
      <div className="recommend-container">
        <h1>원하는 호텔 타입을 선택하세요</h1>
        <p>최대 5개까지 선택할 수 있습니다.</p>
        <div className="hotel-types">
          {hotelTypes.map((type) => (
            <button
              key={type}
              className={`hotel-type-button ${
                selectedTypes.includes(type) ? "selected" : ""
              }`}
              onClick={() => toggleType(type)}
            >
              {selectedTypes.includes(type) ? `✔ ${type}` : `+ ${type}`}
            </button>
          ))}
        </div>
      <button
        className="signup-button"
        onClick={handleSignUp}
        disabled={isSubmitting} // 제출 중일 때 버튼 비활성화
      >
        {isSubmitting ? "회원가입 중..." : "Sign Up"}
      </button>
      {isSubmitting && <p className="success-message">회원가입이 완료되었습니다!</p>}
    </div>
   </div>

  );
};

export default Recommend;