import { useState } from "react";
import { Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/form" />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="*" element={<div>صفحه پیدا نشد!</div>} />
      </Routes>
    </>
  );
}

export default App;
