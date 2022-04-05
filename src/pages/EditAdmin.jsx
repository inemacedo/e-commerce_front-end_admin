import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import "../css/index.css";
import { useEffect, useState } from "react";

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
  return data;
}

function EditAdmin() {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    const getAdmin = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + `/admins/${id}`,
        method: "GET",
        token: user.token,
      });
      console.log(data);
      setAdmin(data);
    };
    getAdmin();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await fetchData({
      url: process.env.REACT_APP_API_URL + `/admins/${id}`,
      method: "PATCH",
      token: user.token,
      body: data,
    });
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Editar Administrador</h1>
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
                  defaultValue={admin.firstname}
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
                  defaultValue={admin.lastname}
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
                  type="text"
                  defaultValue={admin.email}
                  {...register("email", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.name && (
                  <p className="text-warning">{errors.email.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Password
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  defaultValue={admin.passsword}
                  {...register("passsword", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.name && (
                  <p className="text-warning">{errors.passsword.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Imagen
                </label>
                {/* <input
                  className="input-file form-control form-control-lg"
                  type="file"
                  {...register("image")}
                /> */}
              </div>
            </div>
            <button
              className="btn btn-primary btn-icon-split mt-4"
              type="submit"
            >
              <span className="icon text-white-50">
                <i className="fas fa-check"></i>
              </span>
              <span className="text">Guardar</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditAdmin;
