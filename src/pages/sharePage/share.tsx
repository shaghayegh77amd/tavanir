import html2canvas from "html2canvas";
import ShareSheet from "../../components/shareBottomeSheet";
import styles from "./styles.module.scss";

const SharePage = () => {
  const handleCapture = async () => {
    const element = document.body; // یا هر بخش خاصی از صفحه
    const canvas = await html2canvas(element);
    const dataUrl = canvas.toDataURL("image/png");

    if (!dataUrl) return;

    const blob = await (await fetch(dataUrl)).blob();
    const file = new File([blob], "screenshot.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          title: "خانه یخجال نیست!",
          files: [file],
          text: "این صفحه رو ببین!",
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      alert("مرورگر شما اشتراک‌گذاری فایل رو پشتیبانی نمی‌کند.");
    }
  };
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

      <a onClick={handleCapture} className="button">
        بزن بریم بازی :)
      </a>
    </div>
  );
};

export default SharePage;
