import React from "react";
import styles from "./styles.module.scss";

const AnswerItem = ({
  label,
  value,
  selectedValue,
  onChange,
  index,
  type,
  icon,
}) => {
  return (
    <label className={styles.item}>
      <input
        type="radio"
        name="option"
        value={value}
        checked={selectedValue.answer === value}
        onChange={() => onChange(value, index)}
      />
      <div
        className={`${styles.radio} ${
          selectedValue.answer === value ? styles.checked : ""
        }`}
      >
        <span className={styles.circle} />
      </div>
      {type === "text" ? (
        <span className={styles.label}>
          {label}
          {icon && <img src={icon} alt={label} />}
        </span>
      ) : (
        <img src={label} alt="" />
      )}
    </label>
  );
};

export default AnswerItem;
