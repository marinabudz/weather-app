import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ROUTES from "../../common/Routes";
import styles from "./Home.module.scss";

const Home = () => {
  const navigate = useNavigate();
  const update = () => navigate("/form");

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={() => navigate(ROUTES.FORM)}>
          FORM
        </button>
        <button
          className={styles.btn}
          onClick={() => navigate(ROUTES.COUNTRIES)}
        >
          COUNTRIES
        </button>
      </div>
    </div>
  );
};
export default Home;
