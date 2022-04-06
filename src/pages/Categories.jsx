import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { format, parseISO } from "date-fns";
import { Toast } from "react-bootstrap";
import { ToastContainer } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";

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

  const [show, setShow] = useState(false);

  const handleDelete = async (itemId) => {
    setShow(true);
    await fetchData({
      url: process.env.REACT_APP_API_URL + `/categories/${itemId}`,
      method: "DELETE",
      token: user.token,
    });
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== itemId)
    );
  };

  useEffect(() => {
    const getAdmins = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + "/categories",
        method: "GET",
        token: user.token,
      });

      setCategories(data);
    };
    getAdmins();
  }, []);

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Categorías</h1>
        <div className="toast-delete d-flex justify-content-center fixed-top">
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
                <TiDeleteOutline color="red" size="18" /> Se eliminó una Categoría
                correctamente
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
        <Link className="btn btn-primary" to="/categories/new">
          Crear nueva Categoria
        </Link>
      </div>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Lista de categorías
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
                  <th>Nombre</th>
                  <th>Fecha de creación</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tfoot className={`${categories.length >= 10 ? "" : "d-none"}`} >
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Fecha de creación</th>
                  <th>Acciones</th>
                </tr>
              </tfoot>
              <tbody>
                {categories.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{format(parseISO(item.createdAt), "PP")}</td>
                    <td>
                      <div className="d-flex">
                        <EditButton />
                        <DeleteButton onClick={() => handleDelete(item.id)} />
                      </div>
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
