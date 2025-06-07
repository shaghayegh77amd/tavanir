import { useForm } from "react-hook-form";
import styles from "./styled.module.scss";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import OtpTimer from "../otpTimer";
import { useEffect } from "react";
import { data, useNavigate } from "react-router-dom";

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
    setValue,
  } = useForm<FormValues>({ mode: "onChange" });

  const otpValue = watch("OTPCode");

  const navigate = useNavigate();

  useEffect(() => {
    const persianToEnglish = (str: string) =>
      str.replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1728));

    if (otpValue) {
      const fixed = persianToEnglish(otpValue);
      if (otpValue !== fixed) {
        setValue("OTPCode", fixed, { shouldValidate: true });
      }
    }
  }, [otpValue, setValue]);

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
    console.log("ki");
    mutation.mutate(data);
  };

  return (
    <>
      <div className={styles.form}>
        <div className={styles.imageBox}>
          <img src="././images/otp.png" alt="card icon" />
        </div>
        <p>{phone}</p>
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
              autoFocus
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
    </>
  );
};

export default OtpForm;
