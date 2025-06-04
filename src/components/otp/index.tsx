import { useForm } from "react-hook-form";
import styles from "./styled.module.scss";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import OtpTimer from "../otpTimer";
import { useNavigate } from "react-router-dom";

type FormValues = {
  OTPCode: string;
};

const OtpForm: FC<{ phone?: string; onResend: () => void }> = ({
  phone,
  onResend,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<FormValues>({
    mode: "onChange", // فعال‌سازی اعتبارسنجی به‌محض تغییر مقدار
  });

  const navigate = useNavigate();

  const sendOtp = async (data: FormValues) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/verifyOTP`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, MobileNumber: phone }),
      }
    );

    if (!response.ok) {
      throw new Error("ارسال اطلاعات با خطا مواجه شد.");
    }

    return await response.json();
  };

  const mutation = useMutation({
    mutationFn: sendOtp,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        navigate("/certificate");
      } else {
        toast.error(data.message);
      }
    },
    onError: () => {
      toast.error("خطایی رخ داده است.");
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  const otpValue = watch("OTPCode");

  return (
    <div className={styles.form}>
      {phone}
      <div className={styles.imageBox}>
        <img src="././images/otp.png" alt="card icon" />
      </div>
      <h2 className={styles.title}>کد پیامک شده رو وارد کنید:</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputBox}>
          <label>
            کد اعتبارسنجی: <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            maxLength={4}
            inputMode="numeric"
            {...register("OTPCode", {
              required: true,
              pattern: {
                value: /^\d{4}$/,
                message: "کد باید ۴ رقم باشد",
              },
            })}
            placeholder="مثلاً 1234"
          />
        </div>

        <button
          type="submit"
          className="button"
          disabled={!isValid || otpValue?.length !== 4}
        >
          ثبت
        </button>
      </form>

      <OtpTimer onResend={onResend} />
    </div>
  );
};

export default OtpForm;
