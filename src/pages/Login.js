import React from "react";
import { useFormik } from "formik";
import { signUpSchemas } from "../schemas";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    // console.log(`Values :: ${JSON.stringify(values)}`);
    axios
      .post("https://reqres.in/api/login", values)
      .then((Response) => {
        console.log(`Response ${JSON.stringify(Response)}`);
        const token = Response.data.token;
        if (token) {
          localStorage.setItem("token", token);
          navigate("/");
        }
        // console.log(localStorage.getItem("token"),"hello")
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchemas,
      onSubmit,
    });

  return (
    <>
      <div className="main_form">
        <h1 style={{ textAlign: "center" }}>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">
              <b>Email</b>
            </label>{" "}
            <br />
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
          <div className="input-field">
            <label htmlFor="password">
              <b>Password</b>
            </label>{" "}
            <br />
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>

          <button type="submit">
            <b>Login</b>
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
