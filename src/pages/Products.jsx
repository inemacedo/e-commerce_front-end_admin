
import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import CreateItem from "../pages/CreateItem";

async function fetchData({url,method,body}){
  const response = await fetch(
    url, {
      method: method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const data = await response.json();
  return data;
}

function ShowProducts() {

  const [products, setProducts] = useState([]);

  useEffect( ()=>{
    const getProducts = async ()=>{
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL+"/products",
        method: "GET",
      });
      console.log(data);
      setProducts(data);
    }
    getProducts();

  } , [] );

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">

      <h1 className="h3 mb-2 text-gray-800">Products</h1>
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
                  <th>Price(USD)</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Start date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Price(USD)</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Start date</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {products.map( item=><tr key={item.id} >
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.categoryId}</td>
                  <td>
                    <span className="product-description" >{item.description}</span>
                  </td>
                  <td>{item.createdAt}</td>
                  <td>
                    <button className="btn btn-sm btn-danger btn-circle" >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr> )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}


function Products(params) {

  return <div>
    <Routes>
      <Route path="/" element={<ShowProducts />} />
      <Route path="/new" element={<CreateItem>
        <form action="" onSubmit={(ev)=>ev.preventDefault()} >
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">Firstname</label>
              <input className="form-control form-control-lg" type="text" />
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">Lastname</label>
              <input className="form-control form-control-lg" type="text" />
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">Email</label>
              <input className="form-control form-control-lg" type="email" />
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="mt-2 mb-0" htmlFor="">Password</label>
              <input className="form-control form-control-lg" type="password" />
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


export default Products;