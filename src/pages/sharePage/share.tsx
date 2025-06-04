import styles from "./styles.module.scss";

const SharePage = () => {
  return (
    <div className={styles.SharePage}>
      <div className={styles.imageBox}>
        <img src="/images/Certificate.png" />
      </div>
      <p className={styles.title}>بازی «خونه یخچال نیست»</p>

      <p className={styles.text}> من تو این بازی شرکت کردم،</p>
      <p className={styles.text}> گواهی‌نامه خوش‌مصرفی برق گرفتم. </p>

      <p className={styles.text}>
         فقط با جواب دادن به چندتا سوال ساده درباره استفاده درست کولر.
      </p>

      <p className={styles.text}>   جایزه‌ها:</p>
      <p className={styles.text}>  ۲۰ تا جایزه یک میلیون تومنی</p>

      <p className={styles.text}>یک جایزه ویژه ۳۰ میلیون تومنی!</p>

      <a href="/share" className="button">
        بزن بریم بازی :)
      </a>
    </div>
  );
};

export default SharePage;
