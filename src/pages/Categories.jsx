import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import CreateItem from "../pages/CreateItem";

import { useForm } from "react-hook-form";

async function fetchData({url,method,token}){
  const response = await fetch(
    url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+token,
      }
    }
  );
  const data = await response.json();
  return data;
}

function ShowCategories() {

  const [categories, setCategories] = useState([]);
  const user = useSelector(state=>state.user);

  useEffect( ()=>{
    const getAdmins = async ()=>{
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL+"/categories",
        method: "GET",
        token: user.token,
      });
      console.log(data);
      setCategories(data);
    }
    getAdmins();

  } , [] );

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">

<div className="d-flex align-items-start justify-content-between my-4" >
        <h1 className="h3 mb-2 text-gray-800">Categories</h1>
        <Link className="btn btn-primary" to="/categories/new" >Crear nueva Categoria</Link>
      </div>
      <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables.</p>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                { categories.map(user=><tr key={user.id} >
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.slug}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <button className="btn btn-sm btn-danger btn-circle" >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>) }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

function Categories(params) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
  };

  return <div>
    <Routes>
      <Route path="/" element={<ShowCategories />} />
      <Route path="/new" element={<CreateItem>
        <form action="" onSubmit={handleSubmit(onSubmit)} >
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">Name</label>
              <input className="form-control form-control-lg" type="text" placeholder="Ingresa un nombre..." defaultValue="" {...register("categoryName")}  />
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">Slug</label>
              <input className="form-control form-control-lg" type="text" placeholder="Ingresa un slug..." defaultValue="" {...register("slug")}/>
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">Image</label>
              <input className="form-control form-control-lg" type="email" placeholder="Ingresa una url..." defaultValue="" {...register("imgUrl")}/>
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">Password</label>
              <input className="form-control form-control-lg" type="password" placeholder="Ingresa una contraseña..." defaultValue="" {...register("password")}/>
            </div>
          </div>
          <button className="btn btn-primary btn-icon-split mt-4" type="submit" >
            <span className="icon text-white-50" >
              <i className="fas fa-check"></i>
            </span>
            <span className="text" >Create</span>
          </button>
        </form>
      </CreateItem>} />
    </Routes>
  </div>
  
}

export default Categories;