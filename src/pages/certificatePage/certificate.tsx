import styles from "./styles.module.scss";

const CertificatePage = () => {
  return (
    <div className={styles.CertificatePage}>
      <div className={styles.imageBox}>
        <img src="/images/Certificate.png" />
      </div>
      <p className={styles.text}>
        اطلاعاتت با موفقیت ثبت شد و حالا وارد قرعه‌کشی شدی!{" "}
      </p>
      <p className={styles.text}>
        اگه برنده بشی، از طریق شماره‌ای که وارد کردی باهات تماس می‌گیریم.
      </p>

      <p className={styles.text}>
        حالا نوبت توئه که این خبر خوب رو به دوستات بدی تا اونا هم بازی کنن و
        شانس‌شون رو برای شرکت در قرعه‌کشی امتحان کنن.{" "}
      </p>

      <a href="/share" className="button">
         همین الان به اشتراک بذار :)
      </a>
    </div>
  );
};

export default CertificatePage;
