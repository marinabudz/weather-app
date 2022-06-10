import React from "react";
import Input from "../Input/Input";
import styles from "./FormClass.module.scss";

class FormClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      age: null,
      date: null,
    };
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onSetDate = this.onSetDate.bind(this);
  }

  timer = null;

  onSetDate() {
    const date = new Date();
    this.setState({
      date: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    });
  }

  componentDidMount() {
    Promise.resolve({ name: "", age:20 }).then((val) => this.setState(val));

    // this.timer = setInterval(() => {
    //   this.onSetDate();
    // }, 1000);

    //console.log('created,', this.timer)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name && this.state.name === "update") {
      this.setState({ name: "" });
    }
  }

  componentWillUnmount() {
    // if (this.timer) {
    //   //console.log('clear timer',this.timer )
    //   clearInterval(this.timer);
    //   this.timer = null;
    // }
  }

  onChangeUser(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.state);
    // console.log(this.timer);
    if (this.state.age === null || this.state.name === null) {
      return <div className={styles.form}> Loading ....</div>;
    }
    return (
      <div className={styles.form}>
        <Input
          label="Full Name"
          type="text"
          onChange={this.onChangeUser}
          value={this.state.name}
          name="name"
        />
        <Input
          label="Age"
          type="number"
          onChange={this.onChangeUser}
          value={this.state.age}
          name="age"
        />
        {/* <div>Time: {this.state.date}</div> */}
      </div>
    );
  }
}

export default FormClass;
