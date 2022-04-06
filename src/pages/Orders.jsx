import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Routes, Route, Link, Navigate, useParams } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

async function fetchData({ url, method, token, body }) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      body: JSON.stringify(body),
    },
  });
  const data = await response.json();
  return data;
}

function Orders() {
<<<<<<< HEAD

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
=======
  const { register, handleSubmit, getValues } = useForm();
>>>>>>> dd9c31fed43e1955d16dd97bf378e1806a43f940

  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
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

  const onSubmit = async (data) => {
    const response = await fetchData({
      url: process.env.REACT_APP_API_URL + `/orders/1`,
      method: "PATCH",
      token: user.token,
      body: { data },
    });
    console.log(data);
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
                  <th>Estado</th>
                </tr>
              </thead>

              <tbody>
                {console.log(orders)}
                {orders.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.user.firstname + " " + item.user.lastname}</td>
                    <td>
<<<<<<< HEAD
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
=======
                      {item.user.firstname} {item.user.lastname}
>>>>>>> dd9c31fed43e1955d16dd97bf378e1806a43f940
                    </td>
                    <td>{item.user.email}</td>
                    <td>{item.user.phone}</td>

                    <td>{item.address}</td>
                    <td>
                      {
                        <ul key={item.id}>
                          {item.products.map((product) => (
<<<<<<< HEAD
                            <li key={product.slug}>
                              {product.title} {product.quantity} {product.price}
=======
                            <li key={product.id}>
                              {product.title} {product.quantity}
>>>>>>> dd9c31fed43e1955d16dd97bf378e1806a43f940
                            </li>
                          ))}
                        </ul>
                      }
                    </td>
                    <td>{item.totalPrice}</td>
                    <td>{item.paymentMethod}</td>
                    <td>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="d-flex flex-row"
                        action=""
                      >
                        <select {...register("status")}>
                          <option value="RECIBIDO">RECIBIDO</option>
                          <option value="ERROR">ERROR</option>
                          <option value="PAGADO">PAGADO</option>
                          <option value="ENVIADO">ENVIADO</option>
                          <option value="CANCELADO">CANCELADO</option>
                        </select>

                        {
                          <button type="submit">
                            <AiOutlineCheckCircle color="blue" size={32} />
                          </button>
                        }
                      </form>
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

<<<<<<< HEAD

=======
>>>>>>> dd9c31fed43e1955d16dd97bf378e1806a43f940
export default Orders;
