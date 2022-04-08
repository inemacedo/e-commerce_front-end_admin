import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditButton from "../components/EditButton";
import DeleteButton from "../components/DeleteButton";
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

function Users() {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);

  const [show, setShow] = useState(false);

  const handleDelete = async (userId) => {
    setShow(true);
    await fetchData({
      url: process.env.REACT_APP_API_URL + `/users/${userId}`,
      method: "DELETE",
      token: user.token,
    });
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  useEffect(() => {
    const getAdmins = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + "/users",
        method: "GET",
        token: user.token,
      });
      setUsers(data);
    };
    getAdmins();
  }, []);

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Usuarios</h1>
        {/* <!-- DataTales Example --> */}
        <div className="toast-delete d-flex justify-content-center fixed-top">
          <ToastContainer
            style={{ transition: "all .15s" }}
            className={`${show ? "opacity-1" : "opacity-0"} bg-white rounded border border-danger m-2 p-0`}
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
                <TiDeleteOutline color="red" size="18" /> Se elimino Usuario
                correctamente
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Tabla de usuarios
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
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Fecha de creación</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tfoot className={`${users.length >= 10 ? "" : "d-none"}`}>
                <tr>
                  <th>id</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Fecha de creación</th>
                  <th>Acciones</th>
                </tr>
              </tfoot>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>
                      <div className="d-flex">
                        <EditButton />
                        <DeleteButton onClick={() => handleDelete(user.id)} />
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

export default Users;
