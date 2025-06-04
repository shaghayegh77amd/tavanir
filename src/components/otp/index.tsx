import React from "react";
import { useForm } from "react-hook-form";
import styles from "./styled.module.scss";
import { useMutation } from "@tanstack/react-query";

type FormValues = {
  otp: string;
};

const OtpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>();
  const mutation = useMutation({
    mutationFn: sendOtp,
    onSuccess: (data) => {
      console.log("✅ موفقیت:", data);
      // اینجا می‌تونی به صفحه‌ی دیگه ریدایرکت کنی یا پیام موفقیت نشون بدی
    },
    onError: (error) => {
      console.error("❌ خطا در ارسال:", error);
      // پیام خطا نمایش بده
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("اطلاعات ارسال‌شده:", data);
  };

  return (
    <div className={styles.form}>
      <img src="./../../../public/images/otp.png" alt="card icon" />
      <h2 className={styles.title}>کد پیامک شده رو وارد کنید:</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputBox}>
          <label>
            کد اعتبارسنجی: <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            {...register("otp", { required: true })}
            placeholder="وارد کنید"
          />
        </div>

        <button type="submit" className="button" disabled={!isValid}>
          ثبت
        </button>
      </form>
    </div>
  );
};

export default OtpForm;
