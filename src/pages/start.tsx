import React from "react";
import styles from "./styles.module.scss";

const StartPage = () => {
  return (
    <div className={styles.startPage}>
      <img src="./../../public/images/start.png" />
      <p className={styles.title}>هوای خنک خوبه، ولی مصرف برق بالا نه!</p>
      <p className={styles.text}>
        یه بازی باحال داریم که توش یاد می‌گیری چطور از کولرت بهینه استفاده کنی. 
      </p>
      <p className={styles.text}>
        به چند تا سوال کوتاه اگه درست جواب بدی، «گواهی‌نامه خوش‌مصرفی برق» رو
        می‌گیری و وارد قرعه‌کشی می‌شی.
      </p>
      <div className={styles.boldText}>
        <p className={styles.text}>جایزه‌ها چیه؟</p>
        <p className={styles.text}>۲۰ تا جایزه یک میلیون تومنی</p>
        <p className={styles.text}>یک جایزه ویژه ۳۰ میلیون تومنی!</p>
      </div>
      <p className={styles.text}>
        پس بیا شروع کن، یاد بگیر، برنده شو و خونه‌ا‌ت رو خنک نگه دار!{" "}
      </p>

      <a href="" className="button">
        بازی کن ، یک میلیون ببر{" "}
      </a>
    </div>
  );
};

export default StartPage;
