import React from "react";
import styles from "./styles.module.scss";

const Pagination = ({ questionNumber }) => {
  const steps = [1, 2, 3, 4, 5];
  return (
    <div className={styles.pagination}>
      {steps.map((step, index) => (
        <div className={styles.item} key={index}>
          <div
            className={`${styles.number} ${
              questionNumber === index ? styles.active : ""
            }`}
          >
            {step}
          </div>

          {/* عکس بین اعداد، جز آخرین عدد */}
          {index < steps.length - 1 && (
            <img
              src="./../../../public/images/arrow.png"
              alt="arrow"
              className={styles.arrow}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
