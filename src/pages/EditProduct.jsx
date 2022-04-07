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
  const { slug, id } = useParams();
  const [product, setProduct] = useState({});
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
    const getAdmin = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + `/products/${slug}`,
        method: "GET",
        token: user.token,
      });

      setProduct(data);
      for (const key in data) {
        setValue(key, data[key]);
      }
    };
    getAdmin();
  }, []);

  const onSubmit = async (data) => {
    await fetchData({
      url: process.env.REACT_APP_API_URL + `/products/${product.id}`,
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
        <h1 className="h3 mb-2 text-gray-800">Editar Producto</h1>
        <Link className="btn btn-dark" to="/productos">
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
                  defaultValue={product.title}
                  {...register("title", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.title && (
                  <p className="text-danger">{errors.title.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Precio
                </label>
                <input
                  className="form-control form-control-lg"
                  type="number"
                  defaultValue={product.price}
                  {...register("price", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.price && (
                  <p className="text-danger">{errors.price.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Descripción
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  defaultValue={product.description}
                  {...register("description", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.description && (
                  <p className="text-danger">{errors.description.message}</p>
                )}

                <label className="mt-2 mb-0" htmlFor="">
                  Medidas
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  defaultValue={product.measures}
                  {...register("measures", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.measures && (
                  <p className="text-danger">{errors.measures.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Material
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  defaultValue={product.material}
                  {...register("material", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.material && (
                  <p className="text-danger">{errors.material.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Estilo
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  defaultValue={product.style}
                  {...register("style", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.style && (
                  <p className="text-danger">{errors.style.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Ambiente
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  defaultValue={product.environment}
                  {...register("environment", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.environment && (
                  <p className="text-danger">{errors.environment.message}</p>
                )}
              </div>

              <div className="col-md-12 col-lg-6">
                <label className="mt-2 mb-0" htmlFor="">
                  Stock
                </label>
                <input
                  className="form-control form-control-lg"
                  type="number"
                  defaultValue={product.stock}
                  {...register("stock", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.stock && (
                  <p className="text-danger">{errors.stock.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Categoría
                </label>
                <select
                  className="form-control form-control-lg"
                  defaultValue={product.categoryId}
                  {...register("categoryId", {
                    required: "Este campo es obligatorio",
                  })}
                >
                  <option value="1">mesas</option>
                  <option value="2">sillas</option>
                  <option value="3">sillones</option>
                </select>
                {errors.categoryId && (
                  <p className="text-danger">{errors.categoryId.message}</p>
                )}
                <label className="mt-2 mb-0" htmlFor="">
                  Destacado
                </label>
                <select
                  className="form-control form-control-lg"
                  {...register("featured", {
                    required: "Este campo es obligatorio",
                  })}
                >
                  <option value="false">No</option>
                  <option value="true">Si</option>
                </select>
                <label className="mt-2 mb-0" htmlFor="">
                  Imagen Principal
                </label>
                <input
                  className="form-control form-control-lg input-file"
                  type="file"
                  {...register("image")}
                />
                <label className="mt-2 mb-0" htmlFor="">
                  Imagen Ambiente
                </label>
                <input
                  className="form-control form-control-lg input-file"
                  type="file"
                  {...register("imageenvironment")}
                />
                <label className="mt-2 mb-0" htmlFor="">
                  Imagen Medidas
                </label>{" "}
                */}
                <input
                  className="form-control form-control-lg input-file"
                  type="file"
                  {...register("imagemeasures")}
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

export default EditAdmin;
