import { FC, useEffect } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const Result: FC<{ wrongIndexes: [] }> = ({ wrongIndexes }) => {
  const winner = !wrongIndexes.length;
  const navigate = useNavigate();
  useEffect(() => {
    if (winner) {
      localStorage.setItem("quizWinner", "true");
    }
  }, [winner]);

  return (
    <div className={styles.result}>
      <img
        src={winner ? "././images/winner.png" : "././images/loser.png"}
        alt="result"
      />
      {winner ? (
        <>
          <p className={styles.text}>
            «گواهی‌نامه خوش مصرفی برق» رو گرفتی و ثابت کردی که یه مشترک
            خوش‌مصرفی.
          </p>
          <p className={styles.text}>
            حالا اطلاعاتت رو وارد کن که وارد قرعه‌کشی بشی. تو شانس اینو داری یکی
            از ۲۰ جایزه یک میلیونی یا جایزه ویژه ۳۰ میلیونی رو ببری.
          </p>
        </>
      ) : (
        <>
          <p className={styles.text}>آخ! فقط یه کوچولو اشتباه کردی.</p>
          <p className={styles.text}>
            سؤال {wrongIndexes.join(" و ")} رو اشتباه جواب دادی، ولی همین‌قدر که
            تلاش کردی عالیه.
          </p>
          <p className={styles.text}>
            اگه یه بار دیگه امتحان کنی، می‌تونی گواهی بگیری و بری تو قرعه‌کشی
            جایزه...!
          </p>
          <p className={styles.text}>
            پس زودی برگرد، بازی کن و نشون بده چقدر خفنی.
          </p>
        </>
      )}
      <a
        className="button"
        onClick={() => (winner ? navigate("/register") : navigate(0))}
      >
        {winner ? "تکمیل اطلاعات" : "دوباره تلاش میکنم :)"}
      </a>
    </div>
  );
};

export default Result;
