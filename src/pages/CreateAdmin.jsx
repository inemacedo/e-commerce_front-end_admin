import { useSelector, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, Toast } from "react-bootstrap";
import { useState } from "react";

async function fetchData({ url, method, token, body }) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return { status: response.status, data };
}

function CreateAdmin() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await fetchData({
      url: process.env.REACT_APP_API_URL + "/admins",
      method: "POST",
      token: user.token,
      body: data,
    });
    if (response.status === 200) {
      setShowToast(true);
    }
  };

  return (
    <div className="container-fluid">
      <div className="toast-delete d-flex justify-content-center fixed-top">

        <ToastContainer
          style={{ transition: "all .15s" }}
          className={`${showToast ? "opacity-1" : "opacity-0"} bg-dark rounded mt-3 p-0`}
          position="top-end"
        >
          <Toast
            className="bg-dark rounded"
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={5000}
            autohide
          >
            <Toast.Body className="text-light">
              Se ha creado un Admin correctamente
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>

      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Nuevo Administrador</h1>
        <Link className="btn btn-dark" to="/admins">
          Volver
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Detalles</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <label className="mt-2 mb-0" htmlFor="">
                  Nombre
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  defaultValue=""
                  {...register("firstname", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.name && (
                  <p className="text-warning">{errors.firstname.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Apellido
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  {...register("lastname", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.name && (
                  <p className="text-warning">{errors.lastname.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Email
                </label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  {...register("email", {
                    required: "Este campo es obligatorio",
                  })}
                />
                <label className="mt-2 mb-0" htmlFor="">
                  Password
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  {...register("password", {
                    required: "Este campo es obligatorio",
                  })}
                />
              </div>
            </div>
            <button className="btn btn-primary btn-icon-split mt-4" type="submit" >
              <span className="icon text-white-50">
                <i className="fas fa-check"></i>
              </span>
              <span className="text">Create</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
