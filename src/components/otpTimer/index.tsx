import { FC, useEffect, useState } from "react";

const OtpTimer: FC<{ onResend: () => void }> = ({ onResend }) => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResend = () => {
    onResend();
    setTimeLeft(120);
    setCanResend(false);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div style={{ marginTop: "8px", fontSize: "14px", color: "#f7931e" }}>
      {canResend ? (
        <button
          onClick={handleResend}
          style={{
            background: "none",
            border: "none",
            color: "#f7931e",
            cursor: "pointer",
            padding: 0,
            fontSize: "inherit",
            fontFamily: "inherit",
          }}
        >
          ارسال مجدد کد
        </button>
      ) : (
        <span>{formatTime(timeLeft)}</span>
      )}
    </div>
  );
};

export default OtpTimer;
