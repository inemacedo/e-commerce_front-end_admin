import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";


async function fetchData({ url, method, body }) {
  const response = await fetch(
    url, {
    method: method,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  }
  );
  const data = await response.json();
  return { status: response.status, data };
}

function Login() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [showError, setShowError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetchData({
      url: `${process.env.REACT_APP_API_URL}/tokens/admins`,
      method: "POST",
      body: data
    });
    if (response.status !== 200) {
      setShowError(true);
    } else dispatch({ type: "LOGIN", payload: response.data });
  }

  return user.token ? <Navigate to="/" /> : (
    <div className="container mt-">

      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">

        <div className="col-xl-10 col-lg-12 col-md-9">

          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit(onSubmit)} >
                      <div className="form-group">
                        <input type="email" className={`form-control form-control-user ${showError?"border-danger":""}`}
                          id="inputEmail" aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          defaultValue="" {...register("email", { required: true })} />
                      </div>
                      <div className="form-group">
                        <input type="password" className={`form-control form-control-user ${showError?"border-danger":""}`}
                          id="inputPassword" placeholder="Password"
                          defaultValue="" {...register("password", { required: true })} />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input type="checkbox" className="custom-control-input" id="customCheck" />
                          <label className="custom-control-label mt-3" htmlFor="customCheck">Remember
                            Me</label>
                        </div>
                      </div>
                      {showError && <p className="text-danger rounded-pill text-center p-2" >Ingresa tus credenciales correctamente</p>}
                      <button type="submit" className="btn btn-primary btn-user btn-block mt-5">
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


    </div>
  );
}

export default Login;
