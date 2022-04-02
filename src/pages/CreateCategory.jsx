import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../css/index.css";

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

function CreateCategory() {
  const user = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await fetchData({
      url: process.env.REACT_APP_API_URL + "/categories",
      method: "POST",
      token: user.token,
      body: data,
    });
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("featured", "categoryId")); // you can watch individual input by pass the name of the input

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Nueva Categoría</h1>
        <Link className="btn btn-dark" to="/categories">
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
                  Título
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  defaultValue=""
                  {...register("name", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.name && (
                  <p className="text-warning">{errors.name.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Imagen
                </label>
                <input
                  className="input-file form-control form-control-lg"
                  type="file"
                  {...register("image")}
                />
              </div>
            </div>
            <button
              className="btn btn-primary btn-icon-split mt-4"
              type="submit"
            >
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

export default CreateCategory;
