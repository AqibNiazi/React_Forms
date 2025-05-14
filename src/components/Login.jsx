import React, { useState } from "react";
import Input from "./Input";
export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValue.password.trim().length < 6;

  const handleInputBlur = (identifier) => {
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: true,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user email: ", enteredValue.email);
    console.log("user password: ", enteredValue.password);
  };

  const handleChange = (identifier, value) => {
    setEnteredValue((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: false,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          value={enteredValue.email}
          onChange={(event) => handleChange("email", event.target.value)}
          error={emailIsInvalid && "Please enter a valid Email."}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredValue.password}
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleChange("password", event.target.value)}
          error={passwordIsInvalid && "Password must be at least 6 characters."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
