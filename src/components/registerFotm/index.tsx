import React from "react";
import { useForm } from "react-hook-form";
import styles from "./styled.module.scss";

type FormValues = {
  firstName: string;
  lastName: string;
  city: string;
  phone: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("اطلاعات ارسال‌شده:", data);
  };

  return (
    <div className={styles.form}>
      <img src="./../../../public/images/account.png" alt="card icon" />
      <h2 className={styles.title}>اطلاعاتت رو وارد کن:</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputBox}>
          <label>
            نام: <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            {...register("firstName", { required: true })}
            placeholder="وارد کنید"
          />
          {errors.firstName && <p className="error">نام الزامی است</p>}
        </div>

        <div className={styles.inputBox}>
          <label>
            نام‌خانوادگی: <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            {...register("lastName", { required: true })}
            placeholder="وارد کنید"
          />
          {errors.lastName && <p className="error">نام خانوادگی الزامی است</p>}
        </div>

        <div className={styles.inputBox}>
          <label>
            شهر: <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            {...register("city", { required: true })}
            placeholder="وارد کنید"
          />
          {errors.city && <p className="error">شهر الزامی است</p>}
        </div>

        <div className={styles.inputBox}>
          <label>
            شماره موبایل: <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            {...register("phone", {
              required: true,
              pattern: /^09\d{9}$/,
            })}
            placeholder="09123456789"
          />
          {errors.phone && <p className="error">شماره موبایل معتبر نیست</p>}
        </div>

        <button type="submit" className="button" disabled={!isValid}>
          ثبت‌نام
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
