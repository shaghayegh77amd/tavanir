import { Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/startPage/start";
import QuizPage from "./pages/quizPage/quiz";
import RegisterPage from "./pages/register/register";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<div>صفحه پیدا نشد!</div>} />
      </Routes>
    </div>
  );
}

export default App;
