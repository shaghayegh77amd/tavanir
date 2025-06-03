import React from "react";
import styles from "./styles.module.scss";
import Pagination from "../../components/pagination";

const QuizPage = () => {
  return (
    <div className={styles.quizPage}>
      <Pagination questionNumber={0} />
      <a href="/quiz" className="button">
        بعدی
      </a>
    </div>
  );
};

export default QuizPage;
