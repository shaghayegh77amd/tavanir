import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styled.module.scss";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import OtpForm from "../otp";

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
    getValues,
  } = useForm<FormValues>();

  const [formData, setFormData] = useState<FormValues | null>(null);

  const sendRegisterData = async (data: FormValues) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/register`,
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
      if (data.success) {
        setFormData(getValues());
        toast.success(data.message);
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

  return (
    <>
      {console.log(formData)}
      {!Boolean(formData) ? (
        <div className={styles.form}>
          <div className={styles.imageBox}>
            <img src="././images/account.png" alt="card icon" />
          </div>
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
              {errors.LastName && (
                <p className="error">نام خانوادگی الزامی است</p>
              )}
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
      ) : (
        <OtpForm
          phone={formData?.MobileNumber}
          onResend={handleSubmit(onSubmit)}
        />
      )}
    </>
  );
};

export default RegisterForm;
