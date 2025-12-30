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

  //onclicking button sending
  const onSubmit = async (data) => {
    const r = await fetch("http://localhost:3232/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await r.json();

    if (!r.ok) {
      alert(res.message);
      return;
    }

    if (res.role === "admin") {
      //Admin dashboard
      alert("Welcome Admin");
    } else {
      //user dashboard
      alert("Welcome User");
    }
  };

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
