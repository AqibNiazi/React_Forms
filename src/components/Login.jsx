import React, { useState } from "react";
export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });
 const emailIsInvalid =
   enteredValue.email !== "" && !enteredValue.email.includes("@");
 const passwordIsValid = enteredValue.password.trim().length > 6;

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
 };
 return (
   <form onSubmit={handleSubmit}>
     <h2>Login</h2>

     <div className="control-row">
       <div className="control no-margin">
         <label htmlFor="email">Email</label>
         <input
           id="email"
           type="email"
           name="email"
           value={enteredValue.email}
           onChange={(event) => handleChange("email", event.target.value)}
         />
         <div className="control-error">
           {emailIsInvalid && <p>Please enter a valid Email.</p>}
         </div>
       </div>

       <div className="control no-margin">
         <label htmlFor="password">Password</label>
         <input
           id="password"
           type="password"
           name="password"
           value={enteredValue.password}
           onChange={(event) => handleChange("password", event.target.value)}
         />
       </div>
     </div>

     <p className="form-actions">
       <button className="button button-flat">Reset</button>
       <button className="button">Login</button>
     </p>
   </form>
 );
}
