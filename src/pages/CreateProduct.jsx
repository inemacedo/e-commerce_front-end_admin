import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../css/index.css";
import axios from "axios";

/* async function fetchData({ url, method, token, body }) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
    body: body,
  });
  const data = await response.json();
  return data;
}
 */
function CreateProduct() {
  const user = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    await axios({
      url: process.env.REACT_APP_API_URL + "/products",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + user.token,
      },
      data: formData,
    });
  }; // your form submit function which will invoke after successful validation

  // console.log(watch("featured", "categoryId")); // you can watch individual input by pass the name of the input

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Nuevo Producto</h1>
        <Link className="btn btn-dark" to="/productos">
          Volver
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Detalles</h6>
        </div>
        <div className="card-body">
          <form
            encType="multipart/form-data"
            onSubmit={(ev) => handleSubmit(onSubmit(ev))}
          >
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <label className="mt-2 mb-0" htmlFor="">
                  Título
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  defaultValue=""
                  {...register("title", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.title && (
                  <p className="text-warning">{errors.title.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Precio
                </label>
                <input
                  className="form-control form-control-lg"
                  type="number"
                  {...register("price", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.price && (
                  <p className="text-warning">{errors.price.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Descripción
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  {...register("description")}
                />

                <label className="mt-2 mb-0" htmlFor="">
                  Medidas
                </label>
                <input
                  className="form-control form-control-lg"
                  type="measures"
                  {...register("measures")}
                />
                <label className="mt-2 mb-0" htmlFor="">
                  Material
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  {...register("material")}
                />
                <label className="mt-2 mb-0" htmlFor="">
                  Estilo
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  {...register("style")}
                />
                <label className="mt-2 mb-0" htmlFor="">
                  Ambiente
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  {...register("environment")}
                />
              </div>

              <div className="col-md-12 col-lg-6">
                <label className="mt-2 mb-0" htmlFor="">
                  Stock
                </label>
                <input
                  className="form-control form-control-lg"
                  type="number"
                  {...register("stock")}
                />
                <label className="mt-2 mb-0" htmlFor="">
                  Categoría
                </label>
                <select
                  className="form-control form-control-lg"
                  {...register("categoryId")}
                >
                  <option value="1">mesas</option>
                  <option value="2">sillas</option>
                  <option value="3">sillones</option>
                </select>
                <label className="mt-2 mb-0" htmlFor="">
                  Destacado
                </label>
                <select
                  className="form-control form-control-lg"
                  {...register("featured")}
                >
                  <option value="true">Si</option>
                  <option value="false">No</option>
                </select>
                <label className="mt-2 mb-0" htmlFor="">
                  Imagen Principal
                </label>
                <input
                  className="form-control form-control-lg input-file"
                  type="file"
                  {...register("image")}
                  accept="image/png, image/jpeg"
                />
                <label className="mt-2 mb-0" htmlFor="">
                  Imagen Ambiente
                </label>
                <input
                  className="form-control form-control-lg input-file"
                  type="file"
                  {...register("imageenvironment")}
                  accept="image/png, image/jpeg"
                />
                <label className="mt-2 mb-0" htmlFor="">
                  Imagen Medidas
                </label>{" "}
                <input
                  className="form-control form-control-lg input-file"
                  type="file"
                  {...register("imagemeasures")}
                  accept="image/png, image/jpeg"
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
              <span className="text">Crear Producto</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
