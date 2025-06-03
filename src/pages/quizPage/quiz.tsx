import React, { useState } from "react";
import styles from "./styles.module.scss";
import Pagination from "../../components/pagination";
import AnswerItem from "../../components/answerItem";
import { QUESTIONS } from "./../../data/question";

const QuizPage = () => {
  const [selected, setSelected] = useState<{ index: number; answer: number }[]>(
    []
  );
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleSelect = (value: number, index: number) => {
    setSelected((prev: { index: number; answer: number }[]) => {
      const existingIndex = prev.findIndex((item) => item.index === index);

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = { index, answer: value };
        return updated;
      } else {
        return [...prev, { index, answer: value }];
      }
    });
  };
  return (
    <div className={styles.quizPage}>
      <Pagination questionNumber={questionNumber} />
      <p className={styles.title}>{QUESTIONS[questionNumber].title}</p>
      <div className={styles.answerItems}>
        {QUESTIONS[questionNumber].answer?.map((question, index) => {
          return (
            <AnswerItem
              label={question}
              value={index}
              selectedValue={selected[questionNumber] || []}
              onChange={handleSelect}
              index={questionNumber}
              type={QUESTIONS[questionNumber].type}
              icon={QUESTIONS[questionNumber].answerIcon[index]}
              key={index}
            />
          );
        })}

        {QUESTIONS[questionNumber].backGround && (
          <img
            className={styles.backgroundImage}
            src={QUESTIONS[questionNumber].backGround}
          />
        )}
      </div>
      <a
        className="button"
        onClick={() => {
          if (questionNumber < QUESTIONS.length - 1) {
            setQuestionNumber(questionNumber + 1);
          } else {
            window.location.href = "/result";
          }
        }}
      >
        بعدی
      </a>
    </div>
  );
};

export default QuizPage;
