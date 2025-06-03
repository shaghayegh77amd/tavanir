import React, { useState } from "react";
import styles from "./styles.module.scss";
import Pagination from "../../components/pagination";
import AnswerItem from "../../components/answerItem";

const QuizPage = () => {
  const [selected, setSelected] = useState<{ index: number; answer: number }[]>(
    []
  );

  const handleSelect = (val, index) => {
    console.log("Selected:", val);
    setSelected([...selected, { index: index, answer: val }]);
  };
  return (
    <div className={styles.quizPage}>
      <Pagination questionNumber={0} />
      <p className={styles.title}>
        برای صرفه‌جویی، کولر گازی رو روی چند درجه و کولر آبی رو روی چه حالتی
        بذاریم؟
      </p>
      <div className={styles.answerItems}>
        <AnswerItem
          label="./../../../public/images/answer1.png"
          value="0"
          selectedValue={selected[0] || []}
          onChange={handleSelect}
          index={0}
          type="image"
        />
        <AnswerItem
          label="./../../../public/images/answer2.png"
          value="0"
          selectedValue={selected[0] || []}
          onChange={handleSelect}
          index={0}
          type="image"
        />

        <img
          className={styles.backgroundImage}
          src="./../../../public/images/back4.png"
        />
      </div>
      <a href="/quiz" className="button">
        بعدی
      </a>
    </div>
  );
};

export default QuizPage;
