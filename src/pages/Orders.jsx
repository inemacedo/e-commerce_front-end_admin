import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Routes, Route, Link, Navigate, useParams } from "react-router-dom";

import { format, parseISO } from "date-fns";

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

function Orders() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + "/orders/",
        method: "GET",
        token: user.token,
      });
      setOrders(data);
    };
    getOrders();
  }, []);

  const onSubmit = async (id) => {
    const response = await fetchData({
      url: process.env.REACT_APP_API_URL + "/orders/" + id,
      method: "PATCH",
      token: user.token,
      body: { status: selectedStatus },
    });
    console.log(response);
  };
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
                  <th>Cliente</th>
                  <th>E-mail</th>
                  <th>Teléfono</th>
                  <th>Dirección</th>
                  <th>Productos</th>
                  <th>Precio Total (U$D) </th>
                  <th>Forma de pago</th>
                  <th>Fecha de emisión</th>
                  <th>Estado</th>
                </tr>
              </thead>

              <tbody>
                {console.log(orders)}
                {orders.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      {item.user.firstname} {item.user.lastname}
                    </td>
                    <td>{item.user.email}</td>
                    <td>{item.user.phone}</td>

                    <td>{item.address}</td>
                    <td>
                      {
                        <ul className="product-description" key={item.id}>
                          {item.products.map((product) => (
                            <li key={product.id}>
                              {product.title} {product.quantity}
                            </li>
                          ))}
                        </ul>
                      }
                    </td>
                    <td>{item.totalPrice}</td>
                    <td>{item.paymentMethod}</td>
                    <td>{format(parseISO(item.createdAt), "PP")}</td>
                    <td>
                      <select
                        onChange={(ev) => setSelectedStatus(ev.target.value)}
                        defaultValue={item.status}
                      >
                        <option value="RECIBIDO">RECIBIDO</option>
                        <option value="ERROR">ERROR</option>
                        <option value="PAGADO">PAGADO</option>
                        <option value="ENVIADO">ENVIADO</option>
                        <option value="CANCELADO">CANCELADO</option>
                      </select>

                      <button
                        onClick={() => onSubmit(item.id)}
                        className="btn btn-primary btn-icon-split mt-1"
                        type="button"
                      >
                        <span className="icon">
                          <i className="fas fa-check"></i>
                        </span>

                        <span className="text">Actualizar</span>
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
