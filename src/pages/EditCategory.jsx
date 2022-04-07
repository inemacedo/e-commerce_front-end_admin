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

function EditCategory() {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [category, setCategory] = useState({});
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: true,
    delayError: undefined,
  });

  useEffect(() => {
    const getCategory = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + `/categories/${id}`,
        method: "GET",
        token: user.token,
      });
      console.log(id);
      setCategory(data);
      for (const key in data) {
        setValue(key, data[key]);
      }
    };
    getCategory();
  }, []);

  const onSubmit = async (data) => {
    await fetchData({
      url: process.env.REACT_APP_API_URL + `/products/${category.id}`,
      method: "PATCH",
      token: user.token,
      body: data,
    });
  };
  // your form submit function which will invoke after successful validation
  //   console.log(watch("title"));

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Editar Categoría</h1>
        <Link className="btn btn-dark" to="/categorias">
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
                  defaultValue={category.title}
                  {...register("title", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.title && (
                  <p className="text-danger">{errors.title.message}</p>
                )}

                <label className="mt-2 mb-0" htmlFor="">
                  Imagen Principal
                </label>
                <input
                  className="form-control form-control-lg input-file"
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
              <span className="text">Guardar</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCategory;
