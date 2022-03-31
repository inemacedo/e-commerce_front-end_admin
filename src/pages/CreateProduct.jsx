import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreateItem from "./CreateItem";
import { useForm } from "react-hook-form";

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

function CreateProduct() {
  const user = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await fetchData({
      url: process.env.REACT_APP_API_URL + "/products",
      method: "POST",
      token: user.token,
      body: {
        title: data.title,
        description: data.description,
        price: data.price,
        material:data.material
        measures: data.measures,
        style: data.style,
        environment: data.environment,
        stock: data.stock,
        featured: data.featured,
        image: data.image,
        imagemeasures: data.imagemeasures,
        imageenvironment: data.imageenvironment,
        category: data.category,
      },
    });
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("featured", "categoryId")); // you can watch individual input by pass the name of the input

  return (
    <div>
      <CreateItem>
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
                {...register("title", { required: true })}
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">
                Descripción
              </label>
              <input
                className="form-control form-control-lg"
                type="text"
                {...register("description")}
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">
                Precio
              </label>
              <input
                className="form-control form-control-lg"
                type="number"
                {...register("price", { required: true })}
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">
                Medidas
              </label>
              <input
                className="form-control form-control-lg"
                type="measures"
                {...register("measures")}
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">
                Material
              </label>
              <input
                className="form-control form-control-lg"
                type="text"
                {...register("material")}
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">
                Estilo
              </label>
              <input
                className="form-control form-control-lg"
                type="text"
                {...register("style")}
              />
            </div>
            <div className="col-md-12 col-lg-6">
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
            </div>
            <div className="col-md-12 col-lg-6">
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
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">
                Imagen Principal
              </label>
              <input
                className="form-control form-control-lg"
                type="text"
                {...register("image")}
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">
                Imagen Ambiente
              </label>
              <input
                className="form-control form-control-lg"
                type="text"
                {...register("imageenvironment")}
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">
                Imagen Medidas
              </label>
              <input
                className="form-control form-control-lg"
                type="text"
                {...register("imagemeasures")}
              />
            </div>
          </div>
          <button className="btn btn-primary btn-icon-split mt-4" type="submit">
            <span className="icon text-white-50">
              <i className="fas fa-check"></i>
            </span>
            <span className="text">Create</span>
          </button>
        </form>
      </CreateItem>
    </div>
  );
}

export default CreateProduct;
