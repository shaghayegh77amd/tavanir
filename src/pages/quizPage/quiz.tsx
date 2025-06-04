import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Pagination from "../../components/pagination";
import AnswerItem from "../../components/answerItem";
import { ANSWER, QUESTIONS } from "./../../data/question";
import Result from "../../components/result";

const QuizPage = () => {
  const [selected, setSelected] = useState<{ index: number; answer: number }[]>(
    []
  );
  const [questionNumber, setQuestionNumber] = useState(0);

  useEffect(() => {
    QUESTIONS.forEach((question) => {
      if (question.backGround) {
        const img = new Image();
        img.src = question.backGround;
      }

      question.answer?.forEach((ans) => {
        if (typeof ans === "string" && ans.endsWith(".png")) {
          const img = new Image();
          img.src = ans;
        }
      });

      question.answerIcon?.forEach((icon) => {
        if (icon) {
          const img = new Image();
          img.src = icon;
        }
      });
    });
  }, []);

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

  const wrongIndexes = (answers) =>
    answers
      .filter((item) => item.answer !== ANSWER[item.index])
      .map((item) => item.index + 1);

  return (
    <div className={styles.quizPage}>
      {questionNumber < QUESTIONS.length ? (
        <>
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
          <button
            className="button"
            onClick={() => setQuestionNumber(questionNumber + 1)}
            disabled={!Boolean(selected[questionNumber])}
          >
            بعدی
          </button>
        </>
      ) : (
        <Result wrongIndexes={wrongIndexes(selected)} />
      )}
    </div>
  );
};

export default QuizPage;
