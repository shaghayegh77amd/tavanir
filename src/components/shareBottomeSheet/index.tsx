import html2canvas from "html2canvas";
import { useState } from "react";

const ShareSheet = () => {
  const [open, setOpen] = useState(false);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

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
          title: "اشتراک‌گذاری صفحه",
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

  const handleShare = async () => {
    if (!imageDataUrl) return;

    const blob = await (await fetch(imageDataUrl)).blob();
    const file = new File([blob], "screenshot.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          title: "اشتراک‌گذاری صفحه",
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
    <>
      <button onClick={handleCapture}>📤 اشتراک‌گذاری</button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "#fff",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
            padding: "20px",
            zIndex: 9999,
          }}
        >
          <h3>اشتراک‌گذاری صفحه</h3>
          <img
            src={imageDataUrl!}
            alt="Screenshot"
            style={{ width: "100%", borderRadius: "8px", marginBottom: "12px" }}
          />
          <button onClick={handleShare}>ارسال به شبکه‌های اجتماعی</button>
          <button onClick={() => setOpen(false)}>بستن</button>
        </div>
      )}
    </>
  );
};

export default ShareSheet;
