import { Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/start";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<StartPage />} />
        {/* <Route path="/form" element={<FormPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/quiz" element={<QuizPage />} /> */}
        <Route path="*" element={<div>صفحه پیدا نشد!</div>} />
      </Routes>
    </div>
  );
}

export default App;
