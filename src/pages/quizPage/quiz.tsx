import React from "react";
import styles from "./styles.module.scss";
import Pagination from "../../components/pagination";

const QuizPage = () => {
  return (
    <div className={styles.startPage}>
      <Pagination questionNumber={0} />
    </div>
  );
};

export default QuizPage;
