import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { format, parseISO } from "date-fns";
import { Toast } from "react-bootstrap";
import { ToastContainer } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";

async function fetchData({ url, method, body, token }) {
  const response = await fetch(url, {
    method: method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
}

function Products() {
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.user);

  const [show, setShow] = useState(false);

  const handleDelete = async (itemId) => {
    setShow(true);
    await fetchData({
      url: process.env.REACT_APP_API_URL + `/products/${itemId}`,
      method: "DELETE",
      token: user.token,
    });
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== itemId)
    );
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + "/products?limit=100",
        method: "GET",
        token: user.token,
      });
      setProducts(data);
    };
    getProducts();
  }, []);

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Products</h1>
        <div className="toast-delete d-flex justify-content-center">
          <ToastContainer
            style={{ transition: "all .15s" }}
            className={`${show ? "opacity-1" : "opacity-0"} bg-white m-2 p-0`}
            position="top-end"
          >
            <Toast
              className="bg-"
              onClose={() => setShow(false)}
              show={show}
              delay={5000}
              autohide
            >
              <Toast.Body className="text-dark">
                <TiDeleteOutline color="red" size="18" /> Se elimino
                Administrador correctamente
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
        <Link className="btn btn-primary" to="/products/new">
          Crear nuevo Producto
        </Link>
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
                  <th>id</th>
                  <th>Name</th>
                  <th>Price(USD)</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Created At</th>
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
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {products.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.categoryId}</td>
                    <td>
                      <span className="product-description">
                        {item.description}
                      </span>
                    </td>
                    <td>{format(parseISO(item.createdAt), "PP")}</td>
                    <td>
                      <EditButton />
                      <DeleteButton onClick={() => handleDelete(item.id)} />
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

export default Products;
