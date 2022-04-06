import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Routes, Route, Link, Navigate } from "react-router-dom";

async function fetchData({ url, method, token }) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
}

function Orders() {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + "/users",
        method: "GET",
        token: user.token,
      });
      setUsers(data);
    };
    getUsers();
    const getOrders = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + "/orders",
        method: "GET",
        token: user.token,
      });
      setOrders(data);
    };
    getOrders();
  }, []);

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Pedidos</h1>
      </div>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Propiedad</th>
                  <th>Estado</th>
                  <th>Dirección</th>
                  <th>Productos</th>
                  <th>Precio (U$D) </th>
                  <th>Forma de pago</th>
                  <th>Acción </th>
                </tr>
              </thead>

              <tbody>
                {console.log(orders)}
                {orders.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.user.firstname + " " + item.user.lastname}</td>
                    <td>
                      <form className="">
                        <select
                          className="form-control"
                          defaultValue={item.status}
                          {...register("status")}
                        >
                          <option value="RECIBIDO">RECIBIDO</option>
                          <option value="ERROR">ERROR</option>
                          <option value="PAGADO">PAGADO</option>
                          <option value="ENVIADO">ENVIADO</option>
                          <option value="CANCELADO">CANCELADO</option>
                        </select>
                        <button className="btn btn-primary btn-icon-split mt-1" type="submit" >
                          <span className="icon ">
                            <i className="fas fa-check"></i>
                          </span>
                          <span className="text">Actualizar</span>
                        </button>
                      </form>
                    </td>
                    <td>{item.address}</td>
                    <td>
                      {
                        <ul key={item.id}>
                          {item.products.map((product) => (
                            <li key={product.slug}>
                              {product.title} {product.quantity} {product.price}
                            </li>
                          ))}
                        </ul>
                      }
                    </td>
                    <td>{item.totalPrice}</td>
                    <td>{item.paymentMethod}</td>
                    <td>
                      <button className="btn btn-sm btn-danger btn-circle">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Orders;
