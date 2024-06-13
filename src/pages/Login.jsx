import React, { Fragment, useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login, reset } from "../features/auth/authReducer";
// import Spinner from "../components/Spinner";
import { Loading } from "../components";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [wrongMessage, setWrongMessage] = useState(false);
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setFormData({ email: "", password: "" });
      setWrongMessage(true);
      navigate("/login");
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <div
        className=" justify-content-center text-center"
        style={{ display: "grid", paddingTop: "10%" }}
      >
        <div>
          <h1>
            <FaSignInAlt /> Login
          </h1>
          <p>Login and start settings</p>
        </div>
        <div style={{ backgroundColor: "brown" }} className="p-2 ">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
            <div className="mt-2">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={onChange}
              />
            </div>

            <div className="mt-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <Link to="/"
        type='button'
        className='btn btn-secondary btn-block'
        
      >
        guest user
      </Link>
      </div>
      {wrongMessage && (
        <h3 className="text-danger">wrong email or password ... try again </h3>
      )}
    </Fragment>
  );
};

export default Login;
