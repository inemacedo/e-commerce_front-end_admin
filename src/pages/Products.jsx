import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

async function fetchData({ url, method, body }) {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + "/products?limit=100",
        method: "GET",
      });
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Products</h1>
        <Link className="btn btn-primary" to="/products/new">
          Crear nuevo Producto
        </Link>
      </div>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables.
      </p>

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
                    <td>{item.createdAt}</td>
                    <td>
                      <DeleteButton itemId={item.id} />
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
