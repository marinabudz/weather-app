import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import styles from "./FormFunc.module.scss";

const FormFunc = () => {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [userData, setUserData] = useState({ name: "", age: 20 });
  const [date, setDate] = useState(null);
  const [cleared, setCleared] = useState(null);
  const [timer, setTimer]= useState(0)

  const onUpdateUser = (e) =>
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  //setUserData({...userData,  [e.target.name]: e.target.value,})

//setUserData({[e.target.name]: e.target.value,});
  useEffect(() => {
    Promise.resolve(20).then((val) => {
      setName('');
      setAge(val);
    });
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const date = new Date();
  //     setDate(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  //     setCleared(false);
  //   }, 1000);

  //   return () => {
  //     console.log("cancel");
  //     setCleared(true);
  //     clearInterval(intervalId);
  //   };
  // }, [cleared]);

  // console.log({ name, age });
   console.log({ userData });
  // console.log({ cleared });

  if (name === null || age === null) {
    return <div className={styles.form}>Loading ...</div>;
  }
  return (
    <div className={styles.form}>
      <Input
        label="Full Name"
        type="text"
        // onChange={changeName}
        onChange={(e) => {
          onUpdateUser(e);
          setName(e.target.value);
          // console.log('insode',{name})
        }}
        value={name}
        name="name"
      />
      <Input
        label="Age"
        type="number"
        onChange={(e) => {
          onUpdateUser(e);
          setAge(e.target.value);
        }}
        value={age}
        name="age"
      />
      <div>Time: {date}</div>
    </div>
  );
};
export default FormFunc;
