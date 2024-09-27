import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const showSignUp = () => {
    navigate("/signup");
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })
        .then((e) => {
          if (e.status != 200) {
            setFormErrors({
              serverErrror: "server error",
            });
            return;
          }
          return e.json();
        })
        .then((e) => {
          console.log(e, "----------------------");
          if (e.accExists == false) {
            setFormErrors({
              serverErrror: "Account not exists",
            });
            return;
          } else {
            const loginData = {
              digiLogin: true,
              digiLoginToken: e.token,
            };
            localStorage.setItem("digiLoginKey", JSON.stringify(loginData));
            if (localStorage.getItem("digiLoginKey")) {
              let key = localStorage.getItem("digiLoginKey");
              key = JSON.parse(key);
              if (key.digiLogin == true) {
                navigate("/dashboard");
              }
            }
          }
        });
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    console.log(errors, "----------------------errors");
    return errors;
  };

  return (
    <>
      <div className="bgImg" onClick={() => navigate("/")}></div>
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          console.log("Entered Details", formValues)
        )}

        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <button className="fluid ui button submit blue">Submit</button>
            <p>{formErrors.serverErrror}</p>
          </div>
        </form>
        <div className="text">
          Don't have an account?{" "}
          <span onClick={() => showSignUp()}>Signup</span>
        </div>
      </div>
    </>
  );
}

export default Login;
