import React from "react";
import { useForm } from "react-hook-form";
import styles from "./styled.module.scss";
import { useMutation } from "@tanstack/react-query";

type FormValues = {
  FirstName: string;
  LastName: string;
  City: string;
  MobileNumber: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>();

  const sendRegisterData = async (data: FormValues) => {
    const response = await fetch(
      "http://192.168.1.13:8585/api/v1/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("ارسال اطلاعات با خطا مواجه شد.");
    }

    return await response.json();
  };

  const mutation = useMutation({
    mutationFn: sendRegisterData,
    onSuccess: (data) => {
      console.log("✅ موفقیت:", data);
      // اینجا مثلاً می‌تونی کاربر رو به صفحه‌ی بعد ببری یا پیام موفقیت نشون بدی
    },
    onError: (error) => {
      console.error("❌ خطا:", error);
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("اطلاعات ارسال‌شده:", data);
    mutation.mutate(data);
  };

  return (
    <div className={styles.form}>
      lll
      <img src="./../../../public/images/account.png" alt="card icon" />
      <h2 className={styles.title}>اطلاعاتت رو وارد کن:</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputBox}>
          <label>
            نام: <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            {...register("FirstName", { required: true })}
            placeholder="وارد کنید"
          />
          {errors.FirstName && <p className="error">نام الزامی است</p>}
        </div>

        <div className={styles.inputBox}>
          <label>
            نام‌خانوادگی: <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            {...register("LastName", { required: true })}
            placeholder="وارد کنید"
          />
          {errors.LastName && <p className="error">نام خانوادگی الزامی است</p>}
        </div>

        <div className={styles.inputBox}>
          <label>
            شهر: <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            {...register("City", { required: true })}
            placeholder="وارد کنید"
          />
          {errors.City && <p className="error">شهر الزامی است</p>}
        </div>

        <div className={styles.inputBox}>
          <label>
            شماره موبایل: <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            {...register("MobileNumber", {
              required: true,
              pattern: /^09\d{9}$/,
            })}
            placeholder="09123456789"
          />
          {errors.MobileNumber && (
            <p className="error">شماره موبایل معتبر نیست</p>
          )}
        </div>

        <button type="submit" className="button" disabled={!isValid}>
          ثبت‌نام
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
