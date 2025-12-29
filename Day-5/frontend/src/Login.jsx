import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  /*const handleChange = (e) => {
     setEmail(e.target.value)
  }*/

  /*const onSubmit = async (data) => {
    console.log(body);
    let r = await fetch("http://localhost:3232/login", {
      method: "POST",
      body: JSON.stringify(data),
    });*/
  const onSubmit = async (data) => {
    console.log(data);

    const r = await fetch("http://localhost:3232/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await r.text();
    console.log(res);
  };

  // console.log(r);

  /* let res = await r.text();
    const userData = JSON.parse(localStorage.getItem(data.password));
    if (userData) {
      if (userData.password === "12345678") {
        console.log(userData.email + "You are Successfully Loggedin");
      } else {
        console.log("Email or password is not matching");
      }
    } else {
      console.log("Email or password is not matching with our record");
    }
  };
  /*
  const delay = (d) => {
    return new Promise(resolve, reject) => {
      setTimeout(() => {
        resolve()},d*1000);})}
  const onSubmit = aync (data) => {
    await delay(4);  //delaying 
    console.log(data);
    }
  */
  return (
    <>
      {isSubmitting && <div>...Loading</div>}
      <h2>Login form</h2>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          // onChange = {hanleChange}
          {...register("email", {
            required: { value: "true", message: "This field is required" },
          })}
          placeholder="email"
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}

        <input
          type="password"
          {...register("password", {
            required: { value: "true", message: "This field is required" },
            minLength: { value: 8, message: "Min length is 8" },
            maxLength: { value: 15, message: "Max length is 15" },
          })}
          placeholder="password"
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}

        <input
          disabled={isSubmitting}
          type="submit"
          value="submit"
          style={{ color: "green" }}
        />
      </form>
    </>
  );
}

export default Login;
