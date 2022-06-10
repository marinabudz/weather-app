import React from "react";
import FormFunc from "../../components/FormFunc/FormFunc";
import FormClass from "../../components/FormClass/FormClass";
import styles from "./FormPage.module.scss";

const FormPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <p className={styles.title}>Funtional Component</p>
        <FormFunc />
      </div>
      <div className={styles.block}>
        <p className={styles.title}>Class Component</p>
        <FormClass />
      </div>
    </div>
  );
};
export default FormPage;
