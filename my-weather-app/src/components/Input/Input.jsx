import React from "react";
import styles from "./Input.module.scss";

const Input = ({ onChange, label, value, name, type }) => (
  <label className={styles.container}>
    {label}
    <input
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      className={styles.input}
    />
  </label>
);

export default Input;
