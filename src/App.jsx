import { Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/startPage/start";
import QuizPage from "./pages/quizPage/quiz";
import RegisterPage from "./pages/register/register";
import CertificatePage from "./pages/certificatePage/certificate";
import SharePage from "./pages/sharePage/share";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/share" element={<SharePage />} />

        <Route path="*" element={<div>صفحه پیدا نشد!</div>} />
      </Routes>
    </div>
  );
}

export default App;
