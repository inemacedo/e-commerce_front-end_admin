import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";

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

function Categories() {
  const [categories, setCategories] = useState([]);
  const user = useSelector((state) => state.user);

  const handleDelete = async (itemId) => {
    await fetchData({
      url: process.env.REACT_APP_API_URL + `/categories/${itemId}`,
      method: "DELETE",
      token: user.token,
    });
    setCategories((prevProducts) =>
      prevProducts.filter((product) => product.id !== itemId)
    );
  };

  useEffect(() => {
    const getAdmins = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + "/categories",
        method: "GET",
        token: user.token,
      });
      console.log(data);
      setCategories(data);
    };
    getAdmins();
  }, []);

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Categories</h1>
        <Link className="btn btn-primary" to="/categories/new">
          Crear nueva Categoria
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
                {categories.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.slug}</td>
                    <td>{item.createdAt}</td>
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

export default Categories;
