
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import CreateItem from "../pages/CreateItem";


async function fetchData({url,method,token}){
  const response = await fetch(
    url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+token
      }
    }
  );
  const data = await response.json();
  return data;
}

{/* <CreateItem /> */}

function ShowAdmins() {

  const user = useSelector(state=>state.user);
  const [admins, setAdmins] = useState([]);

  useEffect( ()=>{
    const getAdmins = async ()=>{
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL+"/admins",
        method: "GET",
        token: user.token,
      });
      console.log(data);
      setAdmins(data);
    }
    getAdmins();

  } , [] );

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">

      <div className="d-flex align-items-start justify-content-between my-4" >
        <h1 className="h3 mb-2 text-gray-800">Admins</h1>
        <Link className="btn btn-primary" to="/admins/new" >Crear nuevo Admin</Link>
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
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {admins.map( item=><tr key={1} >
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
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


function Admins(params) {

  return <div>
    <Routes>
      <Route path="/" element={<ShowAdmins />} />
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

export default Admins;