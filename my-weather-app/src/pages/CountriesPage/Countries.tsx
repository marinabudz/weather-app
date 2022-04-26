import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions/getCountries";
import Card from '../../components/Card/Card.tsx'
import styles from "./Countries.module.scss";

const CountriesPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countries.data);
  const loading = useSelector((state) => state.countries.isLoading);

  console.log({ countriesData });

  useEffect(() => {
    const countriesThunk = () => dispatch(getCountries());
    countriesThunk();
  }, [dispatch]);
  if (loading) {
    return <div> Loading ...</div>;
  }
  if (!countriesData) {
    return <div> no data to display due to {}</div>;
  }
  return (
    <div className={styles.container}>
      {countriesData?.map((country) => (
        <Card country={country} />
      ))}
    </div>
  );
};

export default CountriesPage;
