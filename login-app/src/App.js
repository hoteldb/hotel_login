import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";
import Recommend from "./SignUp/Recommend";

function App() {
  return (
    <Router>
      <Routes>
        {/* 로그인 화면 */}
        <Route path="/" element={<Login />} />
        {/* 회원가입 화면 */}
        <Route path="/signup" element={<Signup />} />
        {/* 호텔 추천 화면 */}
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </Router>
  );
}

export default App;